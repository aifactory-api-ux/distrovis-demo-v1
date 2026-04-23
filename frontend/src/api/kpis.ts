import { API_URL } from './config';
import { KPIResponse } from '../types';

export async function getKPIs(): Promise<KPIResponse> {
  const response = await fetch(`${API_URL}/kpis`);
  if (!response.ok) {
    throw new Error('Failed to fetch KPIs');
  }
  return response.json();
}