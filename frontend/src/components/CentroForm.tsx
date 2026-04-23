import React, { useState } from 'react';
import { CentroCreate } from '../types';

interface CentroFormProps {
  onSubmit: (data: CentroCreate) => void;
  loading: boolean;
}

export function CentroForm({ onSubmit, loading }: CentroFormProps) {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nombre, ubicacion });
    setNombre('');
    setUbicacion('');
  };

  return (
    <form onSubmit={handleSubmit} className="centro-form">
      <h3>Crear Centro</h3>
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
        {loading ? 'Creando...' : 'Crear Centro'}
      </button>
    </form>
  );
}