# Nimson Muriuki: Portfolio

A one-page portfolio served by a small Express server.

## Run it

```bash
npm install
npm start          # http://localhost:3000
npm run dev        # restarts when server.js changes
```

Set a different port with `PORT=8080 npm start`. Requires Node 20 or newer.

## Structure

```
server.js            Express server (static files, gzip, cache headers)
package.json
public/
  index.html         Page markup
  css/styles.css     All styles
  js/app.js          All behaviour and the content data (see below)
  img/               Photos and project screenshots
```

## Editing content

Most content lives at the top of `public/js/app.js`:

| Constant | What it controls |
| --- | --- |
| `EMAIL` | Contact email used by the form and footer |
| `SOC` | Social links. Empty links are hidden, so add LinkedIn, Instagram, X or WhatsApp URLs here |
| `EX` | The seven "ways I build" entries |
| `ST` | Tech stack groups and tools |
| `PR` | Projects (name, category, status, description, tech, GitHub link, screenshots) |
| `SV` | Services menu |
| `XP` | Experience entries (the git-log style section) |
| `TESTI` | Real testimonials: `{q:"quote", n:"Name", r:"Role"}` |

Images are referenced by relative path (for example `img/photo-3.jpg`), so replace a file in `public/img/` or point an entry at a new one.

## Email setup

The contact form and testimonial postcard post to `POST /api/contact`, which sends mail with Nodemailer. Copy `.env.example` to `.env` and fill in **one** of the options.

**Gmail (easiest).** Turn on 2-Step Verification on the Google account, create an [App Password](https://myaccount.google.com/apppasswords), then:

```env
GMAIL_USER=nimmuriuki6@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

**Any other SMTP provider:**

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=you@example.com
SMTP_PASS=your-password
```

Optional: `CONTACT_TO` sets the destination inbox and `CONTACT_FROM` sets the From address. Both default to the Gmail/SMTP user.

If email is not configured, or a send fails, the forms automatically fall back to Gmail/mailto with a Copy button, so a visitor can still reach you.

## Notes

- `.env` is git-ignored. Never commit real app passwords.
- Fonts load from Google Fonts. For offline use, download them and add `@font-face` rules to `styles.css`.
# portfolio
