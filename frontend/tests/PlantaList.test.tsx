import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PlantaList } from '../src/components/PlantaList';
import { Planta } from '../src/types';

describe('PlantaList', () => {
  it('renders empty message when no plantas', () => {
    render(<PlantaList plantas={[]} />);
    expect(screen.getByText('No hay plantas registradas')).toBeDefined();
  });

  it('renders list of plantas', () => {
    const plantas: Planta[] = [
      { id: 1, nombre: 'Planta Norte', ubicacion: 'Mexico' },
      { id: 2, nombre: 'Planta Sur', ubicacion: 'Guadalajara' },
    ];
    render(<PlantaList plantas={plantas} />);
    expect(screen.getByText('Planta Norte - Mexico')).toBeDefined();
    expect(screen.getByText('Planta Sur - Guadalajara')).toBeDefined();
  });

  it('renders correct number of items', () => {
    const plantas: Planta[] = [
      { id: 1, nombre: 'Planta Uno', ubicacion: 'Ciudad A' },
      { id: 2, nombre: 'Planta Dos', ubicacion: 'Ciudad B' },
      { id: 3, nombre: 'Planta Tres', ubicacion: 'Ciudad C' },
    ];
    render(<PlantaList plantas={plantas} />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
  });
});