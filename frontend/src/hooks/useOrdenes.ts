import { useState, useEffect, useCallback } from 'react';
import { Orden, OrdenCreate } from '../types';
import { getOrdenes, createOrden } from '../api/ordenes';

export function useOrdenes() {
  const [ordenes, setOrdenes] = useState<Orden[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOrdenes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getOrdenes();
      setOrdenes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch ordenes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrdenes();
  }, [fetchOrdenes]);

  const createOrdenFn = useCallback(async (data: OrdenCreate) => {
    setLoading(true);
    setError(null);
    try {
      const newOrden = await createOrden(data);
      setOrdenes((prev) => [...prev, newOrden]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create orden');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { ordenes, loading, error, createOrden: createOrdenFn, refreshOrdenes: fetchOrdenes };
}