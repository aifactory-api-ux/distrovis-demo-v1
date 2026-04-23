# DEVELOPMENT PLAN: Distrovis demo v1

## 1. ARCHITECTURE OVERVIEW

**Components:**
- **Frontend (React 18 + Vite + TypeScript):**
  - SPA dashboard for KPIs, charts, order table, and order creation
  - State managed via hooks; API clients for backend communication
  - Responsive UI, error handling, theme toggle (light/dark)
- **Backend (FastAPI + Python 3.11 + SQLAlchemy + Pydantic):**
  - REST API: /api/plantas, /api/centros, /api/ordenes, /api/kpis
  - SQLite DB, Alembic migrations, seed data on init
  - Structured logging, healthcheck, env validation, error handling
- **Infrastructure:**
  - Dockerized services (frontend, backend, DB)
  - docker-compose with healthchecks, .env.example, run.sh for local setup

**Models & APIs:**
- **Entities:** Planta, Centro, Orden, KPIResponse (see SPEC.md §2)
- **Endpoints:** (see SPEC.md §3)
  - GET/POST /api/plantas, /api/centros, /api/ordenes
  - GET /api/kpis
- **Frontend State:** Managed via hooks (see SPEC.md §7)

**Folder Structure:** (see SPEC.md §4 and architecture notes)
```
project-root/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── routers/
│   │   │   ├── plantas.py
│   │   │   ├── centros.py
│   │   │   ├── ordenes.py
│   │   │   ├── kpis.py
│   │   └── __init__.py
│   ├── Dockerfile
│   └── start.sh
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── plantas.ts
│   │   │   ├── centros.ts
│   │   │   ├── ordenes.ts
│   │   │   ├── kpis.ts
│   │   ├── hooks/
│   │   │   ├── usePlantas.ts
│   │   │   ├── useCentros.ts
│   │   │   ├── useOrdenes.ts
│   │   │   ├── useKPIs.ts
│   │   ├── components/
│   │   │   ├── PlantaList.tsx
│   │   │   ├── PlantaForm.tsx
│   │   │   ├── CentroList.tsx
│   │   │   ├── CentroForm.tsx
│   │   │   ├── OrdenList.tsx
│   │   │   ├── OrdenForm.tsx
│   │   │   ├── KPIDashboard.tsx
│   │   ├── types/
│   │   │   ├── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── Dockerfile
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── start.sh
├── docker-compose.yml
├── .env.example
├── .gitignore
├── .dockerignore
├── run.sh
└── README.md
```

## 2. ACCEPTANCE CRITERIA

1. **End-to-end dashboard:** User can view KPIs, charts, and a paginated/filterable order table, and create new orders, all via the SPA, with real-time updates and error handling.
2. **API contract compliance:** All backend endpoints strictly match the SPEC.md data contracts and respond with correct types, including error handling and healthcheck.
3. **Zero manual setup:** After `./run.sh`, all services are healthy, the app is accessible at the documented URL, and seed data is loaded; all environment variables are validated.

---

## TEAM SCOPE (MANDATORY — PARSED BY THE PIPELINE)
- **role-tl (technical_lead):** Item 1 (Foundation)
- **role-be (backend_developer):** Item 2 (Backend API & DB)
- **role-fe (frontend_developer):** Item 3 (Frontend SPA)
- **role-devops (devops_support):** Item 4 (Infrastructure & Deployment)

---

## 3. EXECUTABLE ITEMS

---

### ITEM 1: Foundation — shared types, interfaces, DB schemas, config

**Goal:**  
Create all shared code and contracts for backend and frontend.  
- All Pydantic and SQLAlchemy models (Planta, Centro, Orden, KPIResponse)
- All TypeScript interfaces (Planta, Centro, Orden, KPIResponse, etc.)
- Shared config and utility modules for env validation and constants
- DB schema SQL with indexes for all tables

**Files to create:**
- backend/app/schemas.py (create) — All Pydantic models as per SPEC.md §2
- backend/app/models.py (create) — All SQLAlchemy ORM models as per SPEC.md §2
- backend/app/database.py (create) — DB session, engine, SQLite config
- backend/app/__init__.py (create) — Package marker
- frontend/src/types/index.ts (create) — All TypeScript interfaces as per SPEC.md §2
- backend/app/crud.py (create) — CRUD functions for Planta, Centro, Orden, KPIResponse
- backend/app/config.py (create) — Environment variable validation and shared constants (Python)
- frontend/src/api/config.ts (create) — API base URL and env validation (TypeScript)
- backend/app/db/schema.sql (create) — Full DB schema with indexes for all tables

**Dependencies:** None

**Validation:**  
- All models/interfaces match SPEC.md exactly (field names, types, required/optional)
- DB schema matches models and includes indexes on foreign keys
- Running `python -c "from app.models import Planta as P; from app.schemas import Planta as S"` succeeds
- TypeScript: `tsc --noEmit` passes in frontend/src/types/index.ts

**Role:** role-tl (technical_lead)

---

### ITEM 2: Backend API — FastAPI endpoints, routers, seed/init, healthcheck

**Goal:**  
Implement all backend API endpoints, routers, and business logic as per SPEC.md.  
- /api/plantas (GET, POST)
- /api/centros (GET, POST)
- /api/ordenes (GET, POST)
- /api/kpis (GET)
- Healthcheck endpoint
- Seed/init logic for DB
- Structured logging, error handling, env validation

**Files to create:**
- backend/app/main.py (create) — FastAPI entrypoint, includes all routers, healthcheck, logging
- backend/app/routers/plantas.py (create) — /api/plantas endpoints
- backend/app/routers/centros.py (create) — /api/centros endpoints
- backend/app/routers/ordenes.py (create) — /api/ordenes endpoints
- backend/app/routers/kpis.py (create) — /api/kpis endpoint
- backend/start.sh (create) — Startup script: env validation, DB migration, seed data, run server
- backend/Dockerfile (create) — Multi-stage build, non-root, EXPOSE 8001, CMD: uvicorn app.main:app --host 0.0.0.0 --port 8001

**Dependencies:** Item 1

**Validation:**  
- `curl http://localhost:8001/api/plantas` returns Planta[]
- `curl http://localhost:8001/api/kpis` returns KPIResponse
- `curl http://localhost:8001/health` returns {status, service, version}
- DB is seeded with initial data on first run
- All endpoints validate input/output and handle errors per contract

**Role:** role-be (backend_developer)

---

### ITEM 3: Frontend SPA — React dashboard, hooks, API clients, UI

**Goal:**  
Implement the full SPA dashboard with all required features:  
- KPI cards, charts (trend, volume), paginated/filterable order table, order creation form
- All hooks and API clients for state management and backend communication
- Responsive UI, error handling, theme toggle (light/dark)
- Strict adherence to SPEC.md contracts for state, props, and API

**Files to create:**
- frontend/src/api/plantas.ts (create) — Planta API client
- frontend/src/api/centros.ts (create) — Centro API client
- frontend/src/api/ordenes.ts (create) — Orden API client
- frontend/src/api/kpis.ts (create) — KPI API client
- frontend/src/hooks/usePlantas.ts (create) — usePlantas() hook
- frontend/src/hooks/useCentros.ts (create) — useCentros() hook
- frontend/src/hooks/useOrdenes.ts (create) — useOrdenes() hook
- frontend/src/hooks/useKPIs.ts (create) — useKPIs() hook
- frontend/src/components/PlantaList.tsx (create) — PlantaList component
- frontend/src/components/PlantaForm.tsx (create) — PlantaForm component
- frontend/src/components/CentroList.tsx (create) — CentroList component
- frontend/src/components/CentroForm.tsx (create) — CentroForm component
- frontend/src/components/OrdenList.tsx (create) — OrdenList component
- frontend/src/components/OrdenForm.tsx (create) — OrdenForm component
- frontend/src/components/KPIDashboard.tsx (create) — KPIDashboard component
- frontend/src/App.tsx (create) — Main React component, layout, routing, theme toggle
- frontend/src/main.tsx (create) — React entrypoint
- frontend/src/index.css (create) — Global styles (including theme)
- frontend/Dockerfile (create) — Multi-stage build, non-root, EXPOSE 5173, VITE_API_URL ARG, runs Vite preview
- frontend/start.sh (create) — Startup script: env validation, run Vite preview
- frontend/vite.config.ts (create) — Vite config with proxy for API
- frontend/tsconfig.json (create) — TypeScript config

**Dependencies:** Item 1

**Validation:**  
- `curl http://localhost:5173` loads the SPA
- User can view KPIs, charts, order table, and create orders
- All API calls succeed and UI updates in real time
- Theme toggle works; UI is responsive
- All TypeScript code passes `tsc --noEmit`

**Role:** role-fe (frontend_developer)

---

### ITEM 4: Infrastructure & Deployment

**Goal:**  
Provide complete local orchestration and documentation for zero-manual-steps setup.  
- docker-compose with healthchecks, depends_on, correct build contexts
- .env.example with all variables and descriptions
- .gitignore, .dockerignore for clean repo
- run.sh for build/start/wait/print URL
- README.md with setup, usage, endpoints
- docs/architecture.md with diagrams and component descriptions

**Files to create:**
- docker-compose.yml (create) — All services, healthchecks, depends_on, correct ports
- .env.example (create) — All variables with descriptions and example values
- .gitignore (create) — Exclude node_modules, dist, .env, __pycache__, *.pyc, etc.
- .dockerignore (create) — Exclude node_modules, .git, *.log, dist
- run.sh (create) — Validates Docker, builds, starts, waits for healthy, prints access URL
- README.md (create) — Prerequisites, clone, run, endpoints, troubleshooting
- docs/architecture.md (create) — System diagram, component descriptions

**Dependencies:** Items 1, 2, 3

**Validation:**  
- `./run.sh` completes with no errors
- All containers are healthy (`docker ps` shows healthy status)
- App is accessible at documented URL
- All endpoints and UI features work as described

**Role:** role-devops (devops_support)

---