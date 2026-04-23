import { useState, useEffect, useCallback } from 'react';
import { KPIResponse } from '../types';
import { getKPIs } from '../api/kpis';

export function useKPIs() {
  const [kpis, setKpis] = useState<KPIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchKPIs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getKPIs();
      setKpis(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch KPIs');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchKPIs();
  }, [fetchKPIs]);

  return { kpis, loading, error, refreshKPIs: fetchKPIs };
}