import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders header with title', () => {
    vi.mock('../src/hooks/usePlantas', () => ({
      usePlantas: () => ({ plantas: [], loading: false, createPlanta: vi.fn() }),
    }));
    vi.mock('../src/hooks/useCentros', () => ({
      useCentros: () => ({ centros: [], loading: false, createCentro: vi.fn() }),
    }));
    vi.mock('../src/hooks/useOrdenes', () => ({
      useOrdenes: () => ({ ordenes: [], loading: false, createOrden: vi.fn() }),
    }));
    vi.mock('../src/hooks/useKPIs', () => ({
      useKPIs: () => ({ kpis: null, loading: false, refreshKPIs: vi.fn() }),
    }));
    render(<App />);
    expect(screen.getByText('Distrovis')).toBeDefined();
  });

  it('renders navigation buttons', () => {
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeDefined();
    expect(screen.getByText('Plantas')).toBeDefined();
    expect(screen.getByText('Centros')).toBeDefined();
    expect(screen.getByText('Ordenes')).toBeDefined();
  });

  it('renders theme toggle button', () => {
    render(<App />);
    expect(screen.getByText('Modo Oscuro')).toBeDefined();
  });
});