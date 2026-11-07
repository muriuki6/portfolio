#!/usr/bin/env bash
# Google Search Console verification helper for this project.
#
# Usage:
#   ./scripts/google-verify.sh html <TOKEN>            # meta tag in public/index.html (recommended here)
#   ./scripts/google-verify.sh dns <DOMAIN> <TOKEN>    # TXT via Vercel DNS (Vercel-managed zones only)
#
# The token is the verification string from Search Console (the part AFTER
# "google-site-verification="). Google tokens are normally 43 characters.
set -euo pipefail

SITE="${SITE:-https://nimson.vercel.app}"
INDEX="public/index.html"

usage() {
  sed -n '2,9p' "$0" | sed 's/^# \{0,1\}//'
  exit 2
}

check_token() {
  local token="$1"
  if [[ -z "$token" ]]; then
    echo "ERROR: no token supplied." >&2
    usage
  fi
  if [[ ! "$token" =~ ^[A-Za-z0-9_-]+$ ]]; then
    echo "ERROR: token contains characters Google does not use." >&2
    exit 1
  fi
  if (( ${#token} != 43 )); then
    echo "WARNING: token is ${#token} characters; Google tokens are usually 43." >&2
    echo "         Re-copy the FULL value from Search Console before deploying." >&2
  fi
}

inject_meta() {
  local token="$1"
  TOKEN="$token" node -e '
    const fs = require("fs");
    const path = "public/index.html";
    const token = process.env.TOKEN;
    const meta = `<meta name="google-site-verification" content="${token}">`;
    let html = fs.readFileSync(path, "utf8");
    const existing = /<meta name="google-site-verification" content="[^"]*">\s*/i;
    if (existing.test(html)) {
      html = html.replace(existing, meta + "\n");
    } else {
      html = html.replace(/<\/head>/i, meta + "\n</head>");
    }
    fs.writeFileSync(path, html);
    console.log("Updated " + path);
  '
}

verify_http() {
  local token="$1"
  echo "Waiting for $SITE to serve the token..."
  for _ in $(seq 1 20); do
    if curl -fsSL "$SITE/" | grep -qF "content=\"$token\""; then
      echo "OK: verification tag is live on $SITE"
      return 0
    fi
    sleep 5
  done
  echo "ERROR: token not found on $SITE after 100s." >&2
  return 1
}

cmd_html() {
  local token="$1"
  check_token "$token"
  [[ -f "$INDEX" ]] || { echo "ERROR: $INDEX not found. Run from the repo root." >&2; exit 1; }

  inject_meta "$token"

  echo "Deploying to production..."
  vercel --prod --yes

  verify_http "$token"
  echo
  echo "Now click Verify in Search Console (URL-prefix property: $SITE/)."
}

cmd_dns() {
  local domain="$1" token="$2"
  check_token "$token"

  # Requires the domain to be added to Vercel AND its nameservers to be Vercel's.
  # This cannot work for *.vercel.app (Vercel owns that zone).
  echo "Adding TXT record to $domain via Vercel DNS..."
  vercel dns add "$domain" '@' TXT "google-site-verification=$token"

  echo "Current records:"
  vercel dns ls "$domain" --json

  echo "Checking public DNS (may take a few minutes to propagate)..."
  for _ in $(seq 1 20); do
    if dig +short TXT "$domain" | grep -qF "google-site-verification=$token"; then
      echo "OK: TXT record is live on $domain"
      return 0
    fi
    sleep 15
  done
  echo "ERROR: TXT record not visible yet. Check nameservers with: dig +short NS $domain" >&2
  return 1
}

case "${1:-}" in
  html) shift; cmd_html "${1:-}" ;;
  dns)  shift; [[ $# -eq 2 ]] || usage; cmd_dns "$1" "$2" ;;
  *) usage ;;
esac
