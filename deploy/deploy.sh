#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <server_user> <server_ip_or_host> [server_path]"
  echo "Example: $0 root 203.0.113.10 /var/www/autopaint"
  exit 1
fi

SERVER_USER="$1"
SERVER_HOST="$2"
SERVER_PATH="${3:-/var/www/autopaint}"

echo "Building production bundle..."
npm install
npm run build

echo "Creating target directories on server..."
ssh "${SERVER_USER}@${SERVER_HOST}" "mkdir -p ${SERVER_PATH}/dist"

echo "Uploading dist/ to server..."
rsync -avz --delete dist/ "${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/dist/"

echo "Done. Next step on server:"
echo "  1. Copy deploy/nginx/autopaint.conf to /etc/nginx/sites-available/autopaint"
echo "  2. Enable the site and reload nginx"
