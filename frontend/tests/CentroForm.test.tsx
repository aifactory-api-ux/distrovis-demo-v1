import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CentroForm } from '../src/components/CentroForm';

describe('CentroForm', () => {
  it('renders form inputs', () => {
    render(<CentroForm onSubmit={vi.fn()} loading={false} />);
    expect(screen.getByPlaceholderText('Nombre')).toBeDefined();
    expect(screen.getByPlaceholderText('Ubicacion')).toBeDefined();
  });

  it('renders submit button', () => {
    render(<CentroForm onSubmit={vi.fn()} loading={false} />);
    expect(screen.getByText('Crear Centro')).toBeDefined();
  });

  it('shows loading state', () => {
    render(<CentroForm onSubmit={vi.fn()} loading={true} />);
    expect(screen.getByText('Creando...')).toBeDefined();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<CentroForm onSubmit={vi.fn()} loading={false} />);
    const nombreInput = screen.getByPlaceholderText('Nombre');
    const ubicacionInput = screen.getByPlaceholderText('Ubicacion');
    await user.type(nombreInput, 'Centro Test');
    await user.type(ubicacionInput, 'Test City');
    expect((nombreInput as HTMLInputElement).value).toBe('Centro Test');
    expect((ubicacionInput as HTMLInputElement).value).toBe('Test City');
  });
});