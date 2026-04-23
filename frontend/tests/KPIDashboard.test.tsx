import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KPIDashboard } from '../src/components/KPIDashboard';
import { KPIResponse } from '../src/types';

describe('KPIDashboard', () => {
  it('renders loading state', () => {
    render(<KPIDashboard kpis={null} loading={true} />);
    expect(screen.getByText(/cargando/i)).toBeDefined();
  });

  it('renders KPIs when provided', () => {
    const kpis: KPIResponse = {
      total_ordenes: 10,
      total_productos: 500,
      ordenes_pendientes: 3,
      ordenes_completadas: 7,
    };
    render(<KPIDashboard kpis={kpis} loading={false} />);
    expect(screen.getByText('10')).toBeDefined();
    expect(screen.getByText('500')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('7')).toBeDefined();
  });
});