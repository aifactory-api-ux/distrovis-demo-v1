import { useState, useEffect, useCallback } from 'react';
import { Planta, PlantaCreate } from '../types';
import { getPlantas, createPlanta } from '../api/plantas';

export function usePlantas() {
  const [plantas, setPlantas] = useState<Planta[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPlantas = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPlantas();
      setPlantas(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch plantas');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlantas();
  }, [fetchPlantas]);

  const createPlantaFn = useCallback(async (data: PlantaCreate) => {
    setLoading(true);
    setError(null);
    try {
      const newPlanta = await createPlanta(data);
      setPlantas((prev) => [...prev, newPlanta]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create planta');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { plantas, loading, error, createPlanta: createPlantaFn, refreshPlantas: fetchPlantas };
}