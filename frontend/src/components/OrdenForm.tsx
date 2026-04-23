import React, { useState } from 'react';
import { OrdenCreate, Planta, Centro } from '../types';

interface OrdenFormProps {
  plantas: Planta[];
  centros: Centro[];
  onSubmit: (data: OrdenCreate) => void;
  loading: boolean;
}

export function OrdenForm({ plantas, centros, onSubmit, loading }: OrdenFormProps) {
  const [plantaId, setPlantaId] = useState<number>(0);
  const [centroId, setCentroId] = useState<number>(0);
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState<number>(0);
  const [estado, setEstado] = useState('pendiente');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      planta_id: plantaId,
      centro_id: centroId,
      producto,
      cantidad,
      estado,
    });
    setProducto('');
    setCantidad(0);
    setEstado('pendiente');
  };

  return (
    <form onSubmit={handleSubmit} className="orden-form">
      <h3>Crear Orden</h3>
      <div>
        <select value={plantaId} onChange={(e) => setPlantaId(Number(e.target.value))} required>
          <option value={0}>Seleccionar Planta</option>
          {plantas.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select value={centroId} onChange={(e) => setCentroId(Number(e.target.value))} required>
          <option value={0}>Seleccionar Centro</option>
          {centros.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <select value={estado} onChange={(e) => setEstado(e.target.value)} required>
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Creando...' : 'Crear Orden'}
      </button>
    </form>
  );
}