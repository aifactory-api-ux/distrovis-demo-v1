import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OrdenForm } from '../src/components/OrdenForm';
import { Planta, Centro } from '../src/types';

describe('OrdenForm', () => {
  const plantas: Planta[] = [
    { id: 1, nombre: 'Planta Norte', ubicacion: 'Mexico' },
  ];
  const centros: Centro[] = [
    { id: 1, nombre: 'Centro Norte', ubicacion: 'Mexico' },
  ];

  it('renders form with required fields', () => {
    render(<OrdenForm plantas={plantas} centros={centros} onSubmit={vi.fn()} loading={false} />);
    expect(screen.getByLabelText(/producto/i)).toBeDefined();
    expect(screen.getByLabelText(/cantidad/i)).toBeDefined();
  });

  it('renders planta and centro dropdowns', () => {
    render(<OrdenForm plantas={plantas} centros={centros} onSubmit={vi.fn()} loading={false} />);
    expect(screen.getByRole('combobox', { name: /planta/i })).toBeDefined();
    expect(screen.getByRole('combobox', { name: /centro/i })).toBeDefined();
  });

  it('renders submit button', () => {
    render(<OrdenForm plantas={plantas} centros={centros} onSubmit={vi.fn()} loading={false} />);
    expect(screen.getByText('Crear Orden')).toBeDefined();
  });

  it('shows loading state', () => {
    render(<OrdenForm plantas={plantas} centros={centros} onSubmit={vi.fn()} loading={true} />);
    expect(screen.getByText('Creando...')).toBeDefined();
  });
});