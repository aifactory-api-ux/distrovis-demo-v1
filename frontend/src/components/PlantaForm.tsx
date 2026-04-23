import React, { useState } from 'react';
import { PlantaCreate } from '../types';

interface PlantaFormProps {
  onSubmit: (data: PlantaCreate) => void;
  loading: boolean;
}

export function PlantaForm({ onSubmit, loading }: PlantaFormProps) {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nombre, ubicacion });
    setNombre('');
    setUbicacion('');
  };

  return (
    <form onSubmit={handleSubmit} className="planta-form">
      <h3>Crear Planta</h3>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Ubicacion"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Creando...' : 'Crear Planta'}
      </button>
    </form>
  );
}