require("dotenv").config();

const path = require("path");
const express = require("express");
const compression = require("compression");
const nodemailer = require("nodemailer");

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

/* ------------------------------------------------------------------ *
 * Contact mail
 *
 * Configure one of these in the environment:
 *   SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
 * or, for Gmail:
 *   GMAIL_USER, GMAIL_APP_PASSWORD
 *
 * Optional:
 *   CONTACT_TO    where messages are delivered (defaults to the sender)
 *   CONTACT_FROM  From header (defaults to the SMTP user)
 * ------------------------------------------------------------------ */

function mailSettings() {
  const user = process.env.SMTP_USER || process.env.GMAIL_USER || "";
  let pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "";
  const gmail = !process.env.SMTP_HOST && Boolean(user && pass);
  // Google shows app passwords with spaces; they are not part of the password.
  if (gmail) pass = pass.replace(/\s+/g, "");
  const host = process.env.SMTP_HOST || (gmail ? "smtp.gmail.com" : "");
  const port = Number(process.env.SMTP_PORT || (gmail ? 465 : 587));
  const secure =
    process.env.SMTP_SECURE != null
      ? /^(1|true|yes)$/i.test(process.env.SMTP_SECURE)
      : port === 465;

  return {
    configured: Boolean(host && user && pass),
    host,
    port,
    secure,
    user,
    pass,
    to: process.env.CONTACT_TO || user,
    from: process.env.CONTACT_FROM || user,
  };
}

const mail = mailSettings();
let transporter = null;

if (mail.configured) {
  transporter = nodemailer.createTransport({
    host: mail.host,
    port: mail.port,
    secure: mail.secure,
    auth: { user: mail.user, pass: mail.pass },
  });
}

const EMAIL_RE = /^[^\s@<>()",;:\\]+@[^\s@<>()",;:\\]+\.[^\s@<>()",;:\\]+$/;

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

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));

const clean = (v, max) =>
  typeof v === "string" ? v.trim().replace(/\r\n/g, "\n").slice(0, max) : "";

app.post("/api/contact", async (req, res) => {
  const b = req.body || {};

  // Honeypot: pretend it worked so bots don't learn anything.
  if (clean(b.website || b.hp, 200)) return res.json({ ok: true });

  const type = b.type === "postcard" ? "postcard" : "message";
  const name = clean(b.name, 100);
  const email = clean(b.email, 160);
  const subject = clean(b.subject, 150);
  const topic = clean(b.topic, 60);
  const role = clean(b.role, 100);
  const message = clean(b.message, 5000);

  if (name.length < 2) {
    return res.status(400).json({ ok: false, code: "invalid_name", error: "Please enter your name." });
  }
  // A contact message needs a reply address; a postcard's email is optional.
  if ((type === "message" || email) && !EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, code: "invalid_email", error: "Enter a valid email address." });
  }
  if (message.length < 10) {
    return res.status(400).json({ ok: false, code: "invalid_message", error: "Please write a little more (10+ characters)." });
  }

  if (rateLimited(req.ip || "unknown")) {
    return res.status(429).json({
      ok: false,
      code: "rate_limited",
      error: "Too many messages in a short time. Please try again later.",
    });
  }

  if (!transporter) {
    return res.status(503).json({
      ok: false,
      code: "not_configured",
      error: "Email sending is not configured on this server yet.",
    });
  }

  const heading = type === "postcard" ? "New postcard" : "New message";
  const mailSubject = subject
    ? `${heading}: ${subject}`
    : `${heading} from ${name}`;

  const lines = [
    `${heading} from the portfolio`,
    "",
    `Name: ${name}`,
    ...(email ? [`Email: ${email}`] : []),
    ...(role ? [`Role / company: ${role}`] : []),
    ...(topic ? [`Topic: ${topic}`] : []),
    ...(subject ? [`Subject: ${subject}`] : []),
    "",
    "Message:",
    message,
  ];

  const html = `<div style="font:15px/1.6 -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#111">
  <h2 style="margin:0 0 16px">${esc(heading)} from the portfolio</h2>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:18px">
    <tr><td style="padding:3px 14px 3px 0;color:#666">Name</td><td>${esc(name)}</td></tr>
    ${email ? `<tr><td style="padding:3px 14px 3px 0;color:#666">Email</td><td>${esc(email)}</td></tr>` : ""}
    ${role ? `<tr><td style="padding:3px 14px 3px 0;color:#666">Role / company</td><td>${esc(role)}</td></tr>` : ""}
    ${topic ? `<tr><td style="padding:3px 14px 3px 0;color:#666">Topic</td><td>${esc(topic)}</td></tr>` : ""}
    ${subject ? `<tr><td style="padding:3px 14px 3px 0;color:#666">Subject</td><td>${esc(subject)}</td></tr>` : ""}
  </table>
  <div style="padding:16px 18px;background:#f5f2ec;border-left:3px solid #FF5B14;white-space:pre-wrap">${esc(message)}</div>
</div>`;

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${mail.from}>`,
      to: mail.to,
      ...(email ? { replyTo: email } : {}),
      subject: mailSubject.replace(/[\r\n]+/g, " "),
      text: lines.join("\n"),
      html,
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error("Contact email failed:", err.message);
    return res.status(502).json({
      ok: false,
      code: "send_failed",
      error: "The message could not be sent right now.",
    });
  }
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
        "or SMTP_HOST/SMTP_USER/SMTP_PASS. The site will fall back to Gmail/mailto."
    );
  }
});
