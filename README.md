# Nimson Muriuki: Portfolio

A one-page portfolio with a static front end and a serverless contact form on Vercel. A small Express server is included for local development.

## Run it

```bash
npm install
npm start          # http://localhost:3000
npm run dev        # restarts when server.js changes
```

Set a different port with `PORT=8080 npm start`. Requires Node 20 or newer.

## Structure

```
server.js            Local Express server (not used on Vercel)
api/contact.js       Vercel serverless function for the contact form
lib/contact-mail.js  Shared form validation and Nodemailer sending
vercel.json          Vercel config (static output directory, headers)
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
| `SOC` | Direct-contact links shown in the contact form and footer: `[label, url, icon]`. Empty links are hidden, so fill in WhatsApp, Telegram, LinkedIn, Instagram, X or Facebook URLs here |
| `EX` | The seven "ways I build" entries |
| `ST` | Tech stack groups and tools |
| `PR` | Projects (name, category, status, description, tech, GitHub link, screenshots) |
| `SV` | Services menu |
| `XP` | Experience entries (the git-log style section) |
| `TESTI` | Real testimonials: `{q:"quote", n:"Name", r:"Role"}` |

Images are referenced by relative path (for example `img/photo-3.jpg`), so replace a file in `public/img/` or point an entry at a new one.

## SEO and link previews

The page ships with Open Graph/Twitter tags, JSON-LD (`Person`, `WebSite`, `ProfilePage`), a canonical URL, favicons, a web app manifest, `robots.txt` and a one-page `sitemap.xml`.

- Hero/entity portrait: `public/img/nimson-muriuki-portrait.webp` (used by the hero `<img>` and the `Person` JSON-LD `image`). Replace this file to update the photo shown in search results.
- The legacy `public/img/photo-1.webp` path permanently redirects to the portrait (see `vercel.json`), so search engines and old links pick up the new image instead of a cached copy.
- Social preview image: `public/img/og-image-2.jpg` (1200 × 630, built from the hero portrait).
- `public/sitemap.xml` includes image entries for the portrait and social preview so Google can recrawl them.
- Absolute URLs currently use **`https://nimson.vercel.app`**. If the production domain changes, update the canonical, Open Graph/Twitter and JSON-LD URLs in `public/index.html`, plus `public/robots.txt` and `public/sitemap.xml`.
- To clear a stale Google thumbnail after changing the portrait, deploy and use Search Console → URL Inspection (request indexing) or the **Refresh outdated content** tool for the old image URL.
- After deploying, test previews with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and the [X Card Validator](https://cards-dev.twitter.com/validator).

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

If email is not configured, or a send fails, the form shows an error on the page.

## Deploying to Vercel

The site runs on Vercel as a static site plus one serverless function:

- `public/` is served as the site (`outputDirectory` in `vercel.json`).
- `api/contact.js` handles `POST /api/contact`.
- `server.js` is for local development only; Vercel never runs it.

Set the project's framework preset to **Other** with the repo root as the root directory. `vercel.json` sets the output directory to `public/`, and Vercel automatically deploys `api/contact.js` as the function behind `POST /api/contact`.

Then add the mail variables under **Settings → Environment Variables**:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

Or use the SMTP variables instead: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`. Optional: `CONTACT_TO` and `CONTACT_FROM`.

`.env` is git-ignored and is never uploaded, so the variables must be set in the Vercel dashboard. Redeploy after adding or changing them.

## Notes

- `.env` is git-ignored. Never commit real app passwords.
- The contact form uses in-memory rate limiting, which is per serverless instance on Vercel; it deters casual spam but is not a hard guarantee.
- Fonts load from Google Fonts. For offline use, download them and add `@font-face` rules to `styles.css`.
# portfolio
