import { API_URL } from './config';
import { Centro, CentroCreate } from '../types';

export async function getCentros(): Promise<Centro[]> {
  const response = await fetch(`${API_URL}/centros`);
  if (!response.ok) {
    throw new Error('Failed to fetch centros');
  }
  return response.json();
}

export async function createCentro(data: CentroCreate): Promise<Centro> {
  const response = await fetch(`${API_URL}/centros`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create centro');
  }
  return response.json();
}