const { sendContactEmail, clean } = require("../lib/contact-mail");

// Small in-memory throttle. Vercel may run several function instances, so this
// is best-effort only; it still stops a single warm instance from being spammed.
const RATE_WINDOW = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW);
  recent.push(now);
  hits.set(ip, recent);

  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_WINDOW)) hits.delete(key);
    }
  }

  return recent.length > RATE_MAX;
}

function reply(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return reply(res, 405, { ok: false, code: "method_not_allowed", error: "Use POST." });
  }

  // Vercel parses JSON bodies automatically; fall back to parsing the raw body
  // for requests that arrive with another content type.
  let body = req.body;
  if (typeof body === "string" || Buffer.isBuffer(body)) {
    try {
      body = JSON.parse(body.toString() || "{}");
    } catch (err) {
      return reply(res, 400, { ok: false, code: "invalid_json", error: "Invalid request body." });
    }
  }
  if (!body || typeof body !== "object") body = {};

  // Honeypot: pretend it worked so bots don't learn anything.
  if (clean(body.website || body.hp, 200)) return reply(res, 200, { ok: true });

  const ip =
    String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.headers["x-real-ip"] ||
    "unknown";
  if (rateLimited(ip)) {
    return reply(res, 429, {
      ok: false,
      code: "rate_limited",
      error: "Too many messages in a short time. Please try again later.",
    });
  }

  const result = await sendContactEmail(body);
  if (result.ok) return reply(res, 200, { ok: true });

  return reply(res, result.status || 500, {
    ok: false,
    code: result.code || "send_failed",
    error: result.error || "The message could not be sent right now.",
  });
};
