from app.routers.kpis import router as kpis_router


def test_read_kpis_empty(client):
    response = client.get("/api/kpis")
    assert response.status_code == 200
    data = response.json()
    assert "total_ordenes" in data
    assert "total_productos" in data
    assert "ordenes_pendientes" in data
    assert "ordenes_completadas" in data


def test_read_kpis_with_data(client):
    planta_response = client.post("/api/plantas", json={
        "nombre": "Planta KPI",
        "ubicacion": "KPI City"
    })
    planta_id = planta_response.json()["id"]

    centro_response = client.post("/api/centros", json={
        "nombre": "Centro KPI",
        "ubicacion": "KPI City"
    })
    centro_id = centro_response.json()["id"]

    client.post("/api/ordenes", json={
        "planta_id": planta_id,
        "centro_id": centro_id,
        "producto": "Producto KPI",
        "cantidad": 100,
        "estado": "completada"
    })

    response = client.get("/api/kpis")
    assert response.status_code == 200
    data = response.json()
    assert data["total_ordenes"] >= 1
    assert data["total_productos"] >= 100