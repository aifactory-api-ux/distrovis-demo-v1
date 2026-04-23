#!/bin/bash
set -e

echo "Starting Distrovis Frontend..."

export FRONTEND_PORT="${FRONTEND_PORT:-5173}"

cd /app

echo "Installing dependencies..."
npm install

echo "Starting Vite preview on port $FRONTEND_PORT..."
npm run preview -- --port "$FRONTEND_PORT" --host