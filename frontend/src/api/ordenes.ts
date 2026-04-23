import { API_URL } from './config';
import { Orden, OrdenCreate } from '../types';

export async function getOrdenes(): Promise<Orden[]> {
  const response = await fetch(`${API_URL}/ordenes`);
  if (!response.ok) {
    throw new Error('Failed to fetch ordenes');
  }
  return response.json();
}

export async function createOrden(data: OrdenCreate): Promise<Orden> {
  const response = await fetch(`${API_URL}/ordenes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create orden');
  }
  return response.json();
}