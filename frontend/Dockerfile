FROM node:20-slim

WORKDIR /app

ARG VITE_API_URL=http://localhost:8001/api

ENV VITE_API_URL=$VITE_API_URL

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["sh", "start.sh"]