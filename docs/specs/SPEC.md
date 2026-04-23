# SPEC.md

## 1. TECHNOLOGY STACK

- **Frontend**
  - React 18.2.0
  - TypeScript 5.2.2
  - Vite 4.4.9
  - Node.js 20.x (build tooling)
- **Backend**
  - FastAPI 0.103.2
  - Python 3.11.x
  - Uvicorn 0.23.2
  - Pydantic 2.4.2
  - SQLAlchemy 2.0.21
  - SQLite 3.x (file-based)
- **Infrastructure**
  - Docker 24.x
  - docker-compose 2.x

---

## 2. DATA CONTRACTS

### Python (FastAPI) — Pydantic Models

```python
from pydantic import BaseModel
from datetime import datetime
from typing import List

class Planta(BaseModel):
    id: int
    nombre: str
    ubicacion: str

class PlantaCreate(BaseModel):
    nombre: str
    ubicacion: str

class Centro(BaseModel):
    id: int
    nombre: str
    ubicacion: str

class CentroCreate(BaseModel):
    nombre: str
    ubicacion: str

class Orden(BaseModel):
    id: int
    planta_id: int
    centro_id: int
    producto: str
    cantidad: int
    estado: str
    fecha_creacion: datetime
    fecha_actualizacion: datetime

class OrdenCreate(BaseModel):
    planta_id: int
    centro_id: int
    producto: str
    cantidad: int
    estado: str

class KPIResponse(BaseModel):
    total_ordenes: int
    total_productos: int
    ordenes_pendientes: int
    ordenes_completadas: int
```

---

### TypeScript — Frontend Interfaces

```typescript
export interface Planta {
  id: number;
  nombre: string;
  ubicacion: string;
}

export interface PlantaCreate {
  nombre: string;
  ubicacion: string;
}

export interface Centro {
  id: number;
  nombre: string;
  ubicacion: string;
}

export interface CentroCreate {
  nombre: string;
  ubicacion: string;
}

export interface Orden {
  id: number;
  planta_id: number;
  centro_id: number;
  producto: string;
  cantidad: number;
  estado: string;
  fecha_creacion: string; // ISO 8601
  fecha_actualizacion: string; // ISO 8601
}

export interface OrdenCreate {
  planta_id: number;
  centro_id: number;
  producto: string;
  cantidad: number;
  estado: string;
}

export interface KPIResponse {
  total_ordenes: number;
  total_productos: number;
  ordenes_pendientes: number;
  ordenes_completadas: number;
}
```

---

## 3. API ENDPOINTS

### /api/plantas

- **GET /api/plantas**
  - Request: None
  - Response: `Planta[]`
- **POST /api/plantas**
  - Request: `PlantaCreate`
  - Response: `Planta`

### /api/centros

- **GET /api/centros**
  - Request: None
  - Response: `Centro[]`
- **POST /api/centros**
  - Request: `CentroCreate`
  - Response: `Centro`

### /api/ordenes

- **GET /api/ordenes**
  - Request: None
  - Response: `Orden[]`
- **POST /api/ordenes**
  - Request: `OrdenCreate`
  - Response: `Orden`

### /api/kpis

- **GET /api/kpis**
  - Request: None
  - Response: `KPIResponse`

---

## 4. FILE STRUCTURE

```
.
├── backend/                         # Backend FastAPI application root
│   ├── app/                        # FastAPI app source code
│   │   ├── main.py                 # FastAPI entrypoint (includes all routers)
│   │   ├── models.py               # SQLAlchemy ORM models
│   │   ├── schemas.py              # Pydantic models (Planta, Centro, Orden, KPIResponse)
│   │   ├── crud.py                 # CRUD operations for all entities
│   │   ├── database.py             # DB session, engine, SQLite config
│   │   ├── routers/                # API routers
│   │   │   ├── plantas.py          # /api/plantas endpoints
│   │   │   ├── centros.py          # /api/centros endpoints
│   │   │   ├── ordenes.py          # /api/ordenes endpoints
│   │   │   ├── kpis.py             # /api/kpis endpoint
│   │   └── __init__.py             # Package marker
│   ├── Dockerfile                  # Backend Docker build file
│   └── start.sh                    # Backend container startup script
├── frontend/                       # React frontend root
│   ├── src/                        # Frontend source code
│   │   ├── api/                    # API client modules
│   │   │   ├── plantas.ts          # Planta API client
│   │   │   ├── centros.ts          # Centro API client
│   │   │   ├── ordenes.ts          # Orden API client
│   │   │   ├── kpis.ts             # KPI API client
│   │   ├── hooks/                  # React hooks for state management
│   │   │   ├── usePlantas.ts       # usePlantas() hook
│   │   │   ├── useCentros.ts       # useCentros() hook
│   │   │   ├── useOrdenes.ts       # useOrdenes() hook
│   │   │   ├── useKPIs.ts          # useKPIs() hook
│   │   ├── components/             # Reusable React components
│   │   │   ├── PlantaList.tsx      # PlantaList component
│   │   │   ├── PlantaForm.tsx      # PlantaForm component
│   │   │   ├── CentroList.tsx      # CentroList component
│   │   │   ├── CentroForm.tsx      # CentroForm component
│   │   │   ├── OrdenList.tsx       # OrdenList component
│   │   │   ├── OrdenForm.tsx       # OrdenForm component
│   │   │   ├── KPIDashboard.tsx    # KPIDashboard component
│   │   ├── types/                  # Shared TypeScript interfaces
│   │   │   ├── index.ts            # All interfaces (Planta, Centro, Orden, KPIResponse)
│   │   ├── App.tsx                 # Main React component
│   │   ├── main.tsx                # React entrypoint
│   │   └── index.css               # Global styles
│   ├── Dockerfile                  # Frontend Docker build file
│   ├── vite.config.ts              # Vite configuration
│   ├── tsconfig.json               # TypeScript configuration
│   └── start.sh                    # Frontend container startup script
├── docker-compose.yml              # Multi-service orchestration
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore file
└── README.md                       # Project documentation
```

---

### PORT TABLE

| Service   | Listening Port | Path                |
|-----------|---------------|---------------------|
| backend   | 8001          | backend/            |

---

## 5. ENVIRONMENT VARIABLES

| Name                | Type   | Description                                           | Example Value                |
|---------------------|--------|-------------------------------------------------------|------------------------------|
| BACKEND_HOST        | str    | Host for FastAPI server (used in docker-compose)      | 0.0.0.0                     |
| BACKEND_PORT        | int    | Port for FastAPI server                               | 8001                        |
| DATABASE_URL        | str    | SQLite DB URL                                         | sqlite:///./distroviz.db     |
| FRONTEND_PORT       | int    | Port for frontend dev server                          | 5173                        |
| VITE_API_URL        | str    | Base URL for API requests from frontend               | http://localhost:8001/api    |
| TZ                  | str    | Timezone for containers                               | America/Mexico_City         |

---

## 6. IMPORT CONTRACTS

### Backend (Python)

- `from app.schemas import Planta, PlantaCreate, Centro, CentroCreate, Orden, OrdenCreate, KPIResponse`
- `from app.models import Planta as PlantaModel, Centro as CentroModel, Orden as OrdenModel`
- `from app.crud import (get_plantas, create_planta, get_centros, create_centro, get_ordenes, create_orden, get_kpis)`
- `from app.database import SessionLocal, engine, Base`
- `from app.routers.plantas import router as plantas_router`
- `from app.routers.centros import router as centros_router`
- `from app.routers.ordenes import router as ordenes_router`
- `from app.routers.kpis import router as kpis_router`

### Frontend (TypeScript/React)

- `import { Planta, PlantaCreate, Centro, CentroCreate, Orden, OrdenCreate, KPIResponse } from '../types'`
- `import { usePlantas } from '../hooks/usePlantas'`
- `import { useCentros } from '../hooks/useCentros'`
- `import { useOrdenes } from '../hooks/useOrdenes'`
- `import { useKPIs } from '../hooks/useKPIs'`
- `import { PlantaList } from '../components/PlantaList'`
- `import { PlantaForm } from '../components/PlantaForm'`
- `import { CentroList } from '../components/CentroList'`
- `import { CentroForm } from '../components/CentroForm'`
- `import { OrdenList } from '../components/OrdenList'`
- `import { OrdenForm } from '../components/OrdenForm'`
- `import { KPIDashboard } from '../components/KPIDashboard'`

---

## 7. FRONTEND STATE & COMPONENT CONTRACTS

### React Hooks (State Primitives)

- `usePlantas() → { plantas: Planta[], loading: boolean, error: string | null, createPlanta: (data: PlantaCreate) => Promise<void> }`
- `useCentros() → { centros: Centro[], loading: boolean, error: string | null, createCentro: (data: CentroCreate) => Promise<void> }`
- `useOrdenes() → { ordenes: Orden[], loading: boolean, error: string | null, createOrden: (data: OrdenCreate) => Promise<void> }`
- `useKPIs() → { kpis: KPIResponse | null, loading: boolean, error: string | null, refreshKPIs: () => Promise<void> }`

### Reusable Components

- `PlantaList` props: `{ plantas: Planta[], onSelect?: (id: number) => void }`
- `PlantaForm` props: `{ onSubmit: (data: PlantaCreate) => void, loading: boolean }`
- `CentroList` props: `{ centros: Centro[], onSelect?: (id: number) => void }`
- `CentroForm` props: `{ onSubmit: (data: CentroCreate) => void, loading: boolean }`
- `OrdenList` props: `{ ordenes: Orden[], onSelect?: (id: number) => void }`
- `OrdenForm` props: `{ plantas: Planta[], centros: Centro[], onSubmit: (data: OrdenCreate) => void, loading: boolean }`
- `KPIDashboard` props: `{ kpis: KPIResponse | null, loading: boolean }`

---

## 8. FILE EXTENSION CONVENTION

- **Frontend files:** `.tsx` for all React components and hooks, `.ts` for TypeScript modules (API, types, hooks).
- **Project language:** TypeScript (frontend), Python (backend).
- **Entry point:** `/src/main.tsx` (as referenced in `index.html` via `<script type="module" src="/src/main.tsx"></script>`).

---

**CRITICAL:**
- All field names, types, and API contracts must match exactly between backend (Pydantic) and frontend (TypeScript).
- All Dockerfiles must use the port assignments from the PORT TABLE verbatim.
- All shared state and component prop names must be used verbatim in all consuming files.
- All infrastructure files listed in the file structure must be present and correctly configured.