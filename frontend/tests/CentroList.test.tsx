import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CentroList } from '../src/components/CentroList';
import { Centro } from '../src/types';

describe('CentroList', () => {
  it('renders empty message when no centros', () => {
    render(<CentroList centros={[]} />);
    expect(screen.getByText('No hay centros registrados')).toBeDefined();
  });

  it('renders list of centros', () => {
    const centros: Centro[] = [
      { id: 1, nombre: 'Centro Norte', ubicacion: 'Mexico' },
      { id: 2, nombre: 'Centro Sur', ubicacion: 'Guadalajara' },
    ];
    render(<CentroList centros={centros} />);
    expect(screen.getByText('Centro Norte - Mexico')).toBeDefined();
    expect(screen.getByText('Centro Sur - Guadalajara')).toBeDefined();
  });

  it('renders correct number of items', () => {
    const centros: Centro[] = [
      { id: 1, nombre: 'Centro Uno', ubicacion: 'Ciudad A' },
      { id: 2, nombre: 'Centro Dos', ubicacion: 'Ciudad B' },
    ];
    render(<CentroList centros={centros} />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(2);
  });
});