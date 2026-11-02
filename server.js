require("dotenv").config();

const path = require("path");
const express = require("express");
const compression = require("compression");
const { sendContactEmail, mail, clean } = require("./lib/contact-mail");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "public");

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(compression());

// Basic security headers. Fonts come from Google Fonts, everything else is local.
app.use((req, res, next) => {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "SAMEORIGIN",
  });
  next();
});

app.use(express.json({ limit: "24kb" }));

// Small in-memory throttle: 5 submissions per IP per 10 minutes.
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

app.post("/api/contact", async (req, res) => {
  const b = req.body || {};

  // Honeypot: pretend it worked so bots don't learn anything.
  if (clean(b.website || b.hp, 200)) return res.json({ ok: true });

  if (rateLimited(req.ip || "unknown")) {
    return res.status(429).json({
      ok: false,
      code: "rate_limited",
      error: "Too many messages in a short time. Please try again later.",
    });
  }

  const result = await sendContactEmail(b);
  if (result.ok) return res.json({ ok: true });

  return res.status(result.status || 500).json({
    ok: false,
    code: result.code || "send_failed",
    error: result.error || "The message could not be sent right now.",
  });
});

// Malformed JSON should not dump an HTML stack trace on the API.
app.use((err, req, res, next) => {
  if (err && req.path === "/api/contact") {
    return res.status(400).json({ ok: false, code: "invalid_json", error: "Invalid request body." });
  }
  next(err);
});

// Images are cached for a week, HTML/CSS/JS are always revalidated.
app.use(
  express.static(PUBLIC, {
    extensions: ["html"],
    setHeaders(res, file) {
      if (/\.(jpg|jpeg|png|webp|svg|ico)$/i.test(file)) {
        res.set("Cache-Control", "public, max-age=604800");
      } else {
        res.set("Cache-Control", "no-cache");
      }
    },
  })
);

// Anything unknown goes back to the one-page site.
app.use((req, res) => res.status(404).sendFile(path.join(PUBLIC, "index.html")));

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
  if (mail.configured) {
    console.log(`Contact form: sending to ${mail.to} via ${mail.host}:${mail.port}`);
  } else {
    console.warn(
      "Contact form: email not configured. Set GMAIL_USER + GMAIL_APP_PASSWORD, " +
        "or SMTP_HOST/SMTP_USER/SMTP_PASS. The form will show an error until it is configured."
    );
  }
});
