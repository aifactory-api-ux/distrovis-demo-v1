from app.routers.plantas import router as plantas_router


def test_read_plantas_empty(client):
    response = client.get("/api/plantas")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_create_planta_endpoint(client):
    response = client.post("/api/plantas", json={
        "nombre": "Planta Endpoint",
        "ubicacion": "Endpoint City"
    })
    assert response.status_code == 200
    data = response.json()
    assert data["nombre"] == "Planta Endpoint"
    assert data["ubicacion"] == "Endpoint City"
    assert "id" in data