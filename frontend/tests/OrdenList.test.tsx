import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OrdenList } from '../src/components/OrdenList';
import { Orden } from '../src/types';

describe('OrdenList', () => {
  it('renders empty message when no ordenes', () => {
    render(<OrdenList ordenes={[]} />);
    expect(screen.getByText('No hay ordenes registradas')).toBeDefined();
  });

  it('renders table headers', () => {
    render(<OrdenList ordenes={[]} />);
    expect(screen.getByText('ID')).toBeDefined();
    expect(screen.getByText('Producto')).toBeDefined();
    expect(screen.getByText('Cantidad')).toBeDefined();
    expect(screen.getByText('Estado')).toBeDefined();
  });

  it('renders orden data in table', () => {
    const ordenes: Orden[] = [
      {
        id: 1,
        planta_id: 1,
        centro_id: 2,
        producto: 'Producto A',
        cantidad: 100,
        estado: 'pendiente',
        fecha_creacion: '2024-01-01T00:00:00Z',
        fecha_actualizacion: '2024-01-01T00:00:00Z',
      },
    ];
    render(<OrdenList ordenes={ordenes} />);
    expect(screen.getByText('Producto A')).toBeDefined();
    expect(screen.getByText('100')).toBeDefined();
    expect(screen.getByText('pendiente')).toBeDefined();
  });
});