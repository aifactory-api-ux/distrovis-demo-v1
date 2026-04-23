# Distrovis

Sistema de gestion de distribucion con dashboard de KPIs, gestion de plantas, centros y ordenes.

## Tecnologias

- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** FastAPI + Python 3.11 + SQLAlchemy + SQLite
- **Infraestructura:** Docker + docker-compose

## Requisitos

- Docker 24.x
- docker-compose 2.x

## Instalacion y Uso

### Opcion 1: Con Docker (Recomendada)

```bash
# Clonar el repositorio
git clone <repository-url>
cd distrovis

# Ejecutar con docker-compose
docker-compose up --build

# La aplicacion estara disponible en:
# - Frontend: http://localhost:5173
# - Backend API: http://localhost:8001
# - Documentacion API: http://localhost:8001/docs
```

### Opcion 2: Ejecucion local

```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```

## Endpoints API

| Metodo | Endpoint | Descripcion |
|--------|----------|-------------|
| GET | /api/plantas | Listar todas las plantas |
| POST | /api/plantas | Crear una planta |
| GET | /api/centros | Listar todos los centros |
| POST | /api/centros | Crear un centro |
| GET | /api/ordenes | Listar todas las ordenes |
| POST | /api/ordenes | Crear una orden |
| GET | /api/kpis | Obtener KPIs |
| GET | /health | Health check |

## Variables de Entorno

| Variable | Descripcion | Valor por defecto |
|----------|-------------|-------------------|
| BACKEND_HOST | Host del servidor backend | 0.0.0.0 |
| BACKEND_PORT | Puerto del servidor backend | 8001 |
| DATABASE_URL | URL de la base de datos SQLite | sqlite:///./distroviz.db |
| FRONTEND_PORT | Puerto del frontend | 5173 |
| VITE_API_URL | URL base de la API para el frontend | http://localhost:8001/api |
| TZ | Zona horaria | America/Mexico_City |

## Solucion de Problemas

### Los contenedores no inician

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Ver logs

```bash
docker-compose logs -f
```

### Reiniciar servicios

```bash
docker-compose restart
```