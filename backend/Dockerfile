FROM python:3.11-slim

WORKDIR /app

RUN pip install --no-cache-dir fastapi==0.103.2 uvicorn==0.23.2 pydantic==2.4.2 sqlalchemy==2.0.21

COPY app/ ./app/

EXPOSE 8001

CMD ["sh", "start.sh"]