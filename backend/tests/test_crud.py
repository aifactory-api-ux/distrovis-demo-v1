from app.crud import get_plantas, create_planta, get_centros, create_centro, get_ordenes, create_orden, get_kpis
from app.schemas import PlantaCreate, CentroCreate, OrdenCreate


def test_create_planta_crud(db):
    planta_data = PlantaCreate(nombre="Planta CRUD", ubicacion="CRUD City")
    result = create_planta(db, planta_data)
    assert result.nombre == "Planta CRUD"
    assert result.ubicacion == "CRUD City"
    assert result.id is not None


def test_get_plantas_crud(db):
    planta_data = PlantaCreate(nombre="Planta List", ubicacion="List City")
    create_planta(db, planta_data)
    result = get_plantas(db)
    assert len(result) >= 1


def test_create_centro_crud(db):
    centro_data = CentroCreate(nombre="Centro CRUD", ubicacion="CRUD City")
    result = create_centro(db, centro_data)
    assert result.nombre == "Centro CRUD"
    assert result.ubicacion == "CRUD City"
    assert result.id is not None


def test_get_centros_crud(db):
    centro_data = CentroCreate(nombre="Centro List", ubicacion="List City")
    create_centro(db, centro_data)
    result = get_centros(db)
    assert len(result) >= 1


def test_create_orden_crud(db):
    planta = create_planta(db, PlantaCreate(nombre="Planta Ord", ubicacion="Ord City"))
    centro = create_centro(db, CentroCreate(nombre="Centro Ord", ubicacion="Ord City"))
    orden_data = OrdenCreate(
        planta_id=planta.id,
        centro_id=centro.id,
        producto="Producto CRUD",
        cantidad=100,
        estado="pendiente"
    )
    result = create_orden(db, orden_data)
    assert result.producto == "Producto CRUD"
    assert result.cantidad == 100
    assert result.estado == "pendiente"
    assert result.id is not None


def test_get_ordenes_crud(db):
    planta = create_planta(db, PlantaCreate(nombre="Planta Ord2", ubicacion="Ord2 City"))
    centro = create_centro(db, CentroCreate(nombre="Centro Ord2", ubicacion="Ord2 City"))
    orden_data = OrdenCreate(
        planta_id=planta.id,
        centro_id=centro.id,
        producto="Producto List",
        cantidad=50,
        estado="completada"
    )
    create_orden(db, orden_data)
    result = get_ordenes(db)
    assert len(result) >= 1


def test_get_kpis_crud(db):
    planta = create_planta(db, PlantaCreate(nombre="Planta KPI", ubicacion="KPI City"))
    centro = create_centro(db, CentroCreate(nombre="Centro KPI", ubicacion="KPI City"))
    orden_data = OrdenCreate(
        planta_id=planta.id,
        centro_id=centro.id,
        producto="Producto KPI",
        cantidad=100,
        estado="completada"
    )
    create_orden(db, orden_data)
    result = get_kpis(db)
    assert result["total_ordenes"] >= 1
    assert result["total_productos"] >= 100
    assert "ordenes_pendientes" in result
    assert "ordenes_completadas" in result