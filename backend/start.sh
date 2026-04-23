#!/bin/bash
set -e

echo "Starting Distrovis Backend..."

export DATABASE_URL="${DATABASE_URL:-sqlite:///./distroviz.db}"
export BACKEND_HOST="${BACKEND_HOST:-0.0.0.0}"
export BACKEND_PORT="${BACKEND_PORT:-8001}"

cd /app

echo "Database URL: $DATABASE_URL"
echo "Starting server on $BACKEND_HOST:$BACKEND_PORT"

uvicorn app.main:app --host "$BACKEND_HOST" --port "$BACKEND_PORT"