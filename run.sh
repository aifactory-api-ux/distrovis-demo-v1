#!/bin/bash
set -e

echo "Distrovis - Starting application..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "Error: docker-compose is not installed"
    exit 1
fi

echo "Building and starting containers..."
docker-compose up --build -d

echo "Waiting for services to be healthy..."
sleep 5

# Check backend health
for i in {1..30}; do
    if curl -sf http://localhost:8001/health > /dev/null 2>&1; then
        echo "Backend is healthy"
        break
    fi
    echo "Waiting for backend... ($i/30)"
    sleep 2
done

echo ""
echo "==================================="
echo "Distrovis is running!"
echo "==================================="
echo "Frontend: http://localhost:5173"
echo "Backend API: http://localhost:8001"
echo "API Docs: http://localhost:8001/docs"
echo ""
echo "To view logs: docker-compose logs -f"
echo "To stop: docker-compose down"