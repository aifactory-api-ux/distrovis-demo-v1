import { API_URL } from './config';
import { Planta, PlantaCreate } from '../types';

export async function getPlantas(): Promise<Planta[]> {
  const response = await fetch(`${API_URL}/plantas`);
  if (!response.ok) {
    throw new Error('Failed to fetch plantas');
  }
  return response.json();
}

export async function createPlanta(data: PlantaCreate): Promise<Planta> {
  const response = await fetch(`${API_URL}/plantas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create planta');
  }
  return response.json();
}