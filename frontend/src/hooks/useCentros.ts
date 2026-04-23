import { useState, useEffect, useCallback } from 'react';
import { Centro, CentroCreate } from '../types';
import { getCentros, createCentro } from '../api/centros';

export function useCentros() {
  const [centros, setCentros] = useState<Centro[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCentros = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCentros();
      setCentros(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch centros');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCentros();
  }, [fetchCentros]);

  const createCentroFn = useCallback(async (data: CentroCreate) => {
    setLoading(true);
    setError(null);
    try {
      const newCentro = await createCentro(data);
      setCentros((prev) => [...prev, newCentro]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create centro');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { centros, loading, error, createCentro: createCentroFn, refreshCentros: fetchCentros };
}