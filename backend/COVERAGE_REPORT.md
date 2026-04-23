# Coverage Report — backend
Fecha: 2026-04-23  |  Stack: Python/FastAPI  |  Ejecutado desde: backend/

---

## Resumen ejecutivo
| Métrica | Valor |
|---------|-------|
| Estado general | 🟢 BUENO |
| Cobertura total | 98% |
| Tests ejecutados | 25 |
| Tests pasados | 25 |
| Tests fallidos | 0 |
| Tests con error | 0 |

---

## Cobertura por archivo
| Archivo | Líneas | Cobertura | Estado |
|---------|--------|-----------|--------|
| app/crud.py | 35 | 100% | ✅ |
| app/main.py | 58 | 100% | ✅ |
| app/models.py | 28 | 100% | ✅ |
| app/routers/centros.py | 14 | 100% | ✅ |
| app/routers/kpis.py | 9 | 100% | ✅ |
| app/routers/ordenes.py | 14 | 100% | ✅ |
| app/routers/plantas.py | 14 | 100% | ✅ |
| app/schemas.py | 37 | 100% | ✅ |
| app/database.py | 13 | 69% | 🟡 |
| app/__init__.py | 0 | 100% | ✅ |

---

## Tests pasados ✅
- `test_centros.py::test_read_centros_empty` — read centros empty list
- `test_centros.py::test_create_centro_endpoint` — create centro via API
- `test_crud.py::test_create_planta_crud` — create planta via CRUD
- `test_crud.py::test_get_plantas_crud` — get plantas via CRUD
- `test_crud.py::test_create_centro_crud` — create centro via CRUD
- `test_crud.py::test_get_centros_crud` — get centros via CRUD
- `test_crud.py::test_create_orden_crud` — create orden via CRUD
- `test_crud.py::test_get_ordenes_crud` — get ordenes via CRUD
- `test_crud.py::test_get_kpis_crud` — get KPIs via CRUD
- `test_kpis.py::test_read_kpis_empty` — read KPIs empty
- `test_kpis.py::test_read_kpis_with_data` — read KPIs with data
- `test_main.py::test_health_check` — health check endpoint
- `test_main.py::test_root` — root endpoint
- `test_models.py::test_planta_model_fields` — planta model fields
- `test_models.py::test_centro_model_fields` — centro model fields
- `test_models.py::test_orden_model_fields` — orden model fields
- `test_models.py::test_orden_model_with_dates` — orden model with dates
- `test_ordenes.py::test_read_ordenes_empty` — read ordenes empty
- `test_ordenes.py::test_create_orden_endpoint` — create orden via API
- `test_plantas.py::test_read_plantas_empty` — read plantas empty
- `test_plantas.py::test_create_planta_endpoint` — create planta via API
- `test_schemas.py::test_planta_create_schema` — planta create schema
- `test_schemas.py::test_centro_create_schema` — centro create schema
- `test_schemas.py::test_orden_create_schema` — orden create schema
- `test_schemas.py::test_kpi_response_schema` — KPI response schema

---

## Tests fallidos / errores ❌
No hay tests fallidos.

---

## Gaps de cobertura
Código que quedó sin cubrir y por qué:
- `app/database.py:15` — `declarative_base()` deprecated API (SQLAlchemy 2.0 migration issue)
- `app/database.py:1-4` — Database URL environment variable handling not tested

---

## Recomendaciones
Ordered by priority:
1. 🟢 **[BAJO]** — Migrate `declarative_base()` to `sqlalchemy.orm.declarative_base()` in app/database.py:15
2. 🟢 **[BAJO]** — Consider using `model_dump()` instead of `dict()` in Pydantic schemas (deprecated)

---

## Output completo
```
/usr/local/lib/python3.11/site-packages/pytest_asyncio/plugin.py:208: PytestDeprecationWarning: The configuration option "asyncio_default_fixture_loop_scope" is unset.
The event loop scope for asynchronous fixtures will default to the fixture caching scope. Future versions of pytest-asyncio will default the loop scope for asynchronous fixtures to function scope. Set the default fixture loop scope explicitly in order to avoid unexpected behavior in the future. Valid values are "function", "class", "module", "package", "session"

  warnings.warn(PytestDeprecationWarning(_DEFAULT_FIXTURE_LOOP_SCOPE_UNSET))
============================= test session starts ==============================
platform linux -- Python 3.11.15, pytest-8.3.2, pluggy-1.6.0 -- /usr/local/bin/python
cachedir: .pytest_cache
benchmark: 4.0.0 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000 warmup_strategy=legacy)
rootdir: /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/backend
plugins: cov-7.1.0, benchmark-4.0.0, langsmith-0.7.33, asyncio-0.24.0, anyio-4.13.0
asyncio: mode=Mode.STRICT, default_loop_scope=None
collecting ... collected 25 items

tests/test_centros.py::test_read_centros_empty PASSED                    [  4%]
tests/test_centros.py::test_create_centro_endpoint PASSED                [  8%]
tests/test_crud.py::test_create_planta_crud PASSED                       [ 12%]
tests/test_crud.py::test_get_plantas_crud PASSED                         [ 16%]
tests/test_crud.py::test_create_centro_crud PASSED                       [ 20%]
tests/test_crud.py::test_get_centros_crud PASSED                         [ 24%]
tests/test_crud.py::test_create_orden_crud PASSED                         [ 28%]
tests/test_crud.py::test_get_ordenes_crud PASSED                         [ 32%]
tests/test_crud.py::test_get_kpis_crud PASSED                            [ 36%]
tests/test_kpis.py::test_read_kpis_empty PASSED                          [ 40%]
tests/test_kpis.py::test_read_kpis_with_data PASSED                       [ 44%]
tests/test_main.py::test_health_check PASSED                             [ 48%]
tests/test_main.py::test_root PASSED                                     [ 52%]
tests/test_models.py::test_planta_model_fields PASSED                    [ 56%]
tests/test_models.py::test_centro_model_fields PASSED                    [ 60%]
tests/test_models.py::test_orden_model_fields PASSED                     [ 64%]
tests/test_models.py::test_orden_model_with_dates PASSED                  [ 68%]
tests/test_ordenes.py::test_read_ordenes_empty PASSED                    [ 72%]
tests/test_ordenes.py::test_create_orden_endpoint PASSED                 [ 76%]
tests/test_plantas.py::test_read_plantas_empty PASSED                    [ 80%]
tests/test_plantas.py::test_create_planta_endpoint PASSED                [ 84%]
tests/test_schemas.py::test_planta_create_schema PASSED                  [ 88%]
tests/test_schemas.py::test_centro_create_schema PASSED                   [ 92%]
tests/test_schemas.py::test_orden_create_schema PASSED                   [ 96%]
tests/test_schemas.py::test_kpi_response_schema PASSED                    [100%]

=============================== warnings summary ===============================
../../../usr/local/lib/python3.11/site-packages/starlette/formparsers.py:12
  /usr/local/lib/python3.11/site-packages/starlette/formparsers.py:12: PendingDeprecationWarning: Please use `import python_multipart` instead.
    import multipart

app/database.py:15
  /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/backend/app/database.py:15: MovedIn20Warning: The ``declarative_base()`` function is now available as sqlalchemy.orm.declarative_base(). (deprecated since: 2.0) (Background on SQLAlchemy 2.0 at https://sqlalche.me/e/b8d9)
    Base = declarative_base()

tests/test_centros.py::test_create_centro_endpoint
tests/test_crud.py::test_create_centro_crud
tests/test_crud.py::test_get_centros_crud
tests/test_crud.py::test_create_orden_crud
tests/test_crud.py::test_get_ordenes_crud
tests/test_crud.py::test_get_kpis_crud
tests/test_kpis.py::test_read_kpis_with_data
tests/test_ordenes.py::test_create_orden_endpoint
  /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/backend/app/crud.py:25: PydanticDeprecatedSince20: The `dict` method is deprecated; use `model_dump` instead. Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.13/migration/
    db_centro = CentroModel(**centro.dict())

tests/test_crud.py::test_create_planta_crud
tests/test_crud.py::test_get_plantas_crud
tests/test_crud.py::test_create_orden_crud
tests/test_crud.py::test_get_ordenes_crud
tests/test_crud.py::test_get_kpis_crud
tests/test_kpis.py::test_read_kpis_with_data
tests/test_ordenes.py::test_create_orden_endpoint
tests/test_plantas.py::test_create_planta_endpoint
  /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/backend/app/crud.py:13: PydanticDeprecatedSince20: The `dict` method is deprecated; use `model_dump` instead. Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.13/migration/
    db_planta = PlantaModel(**planta.dict())

tests/test_crud.py::test_create_orden_crud
tests/test_crud.py::test_get_ordenes_crud
tests/test_crud.py::test_get_kpis_crud
tests/test_kpis.py::test_read_kpis_with_data
tests/test_ordenes.py::test_create_orden_endpoint
  /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/backend/app/crud.py:37: PydanticDeprecatedSince20: The `dict` method is deprecated; use `model_dump` instead. Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.13/migration/
    db_orden = OrdenModel(**orden.dict())

tests/test_schemas.py::test_planta_create_schema
  /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/backend/tests/test_schemas.py:8: PydanticDeprecatedSince20: The `dict` method is deprecated; use `model_dump` instead. Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.13/migration/
    assert planta.dict() == {"nombre": "Planta Test", "ubicacion": "Test City"}

tests/test_schemas.py::test_centro_create_schema
  /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/backend/tests/test_schemas.py:15: PydanticDeprecatedSince20: The `dict` method is deprecated; use `model_dump` instead. Deprecated in Pydantic V2.0 to be removed in V3.0. See Pydantic V2 Migration Guide at https://errors.pydantic.dev/2.13/migration/
    assert centro.dict() == {"nombre": "Centro Test", "ubicacion": "Test City"}

-- Docs: https://docs.pytest.org/how-to/capture-warnings.html
================================ tests coverage ================================
_______________ coverage: platform linux, python 3.11.15-final-0 _______________

Name                      Stmts   Miss  Cover
---------------------------------------------
app/__init__.py               0      0   100%
app/crud.py                  35      0   100%
app/database.py              13      4    69%
app/main.py                  58      0   100%
app/models.py                28      0   100%
app/routers/__init__.py       0      0   100%
app/routers/centros.py       14      0   100%
app/routers/kpis.py           9      0   100%
app/routers/ordenes.py       14      0   100%
app/routers/plantas.py       14      0   100%
app/schemas.py               37      0   100%
---------------------------------------------
TOTAL                       222      4    98%
======================= 25 passed, 25 warnings in 1.08s ========================
```