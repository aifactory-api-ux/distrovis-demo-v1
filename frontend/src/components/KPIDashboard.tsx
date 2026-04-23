import { KPIResponse } from '../types';

interface KPIDashboardProps {
  kpis: KPIResponse | null;
  loading: boolean;
}

export function KPIDashboard({ kpis, loading }: KPIDashboardProps) {
  if (loading) {
    return <div className="kpi-dashboard">Cargando KPIs...</div>;
  }

  if (!kpis) {
    return <div className="kpi-dashboard">No hay datos de KPIs disponibles</div>;
  }

  return (
    <div className="kpi-dashboard">
      <h2>Dashboard de KPIs</h2>
      <div className="kpi-cards">
        <div className="kpi-card">
          <h3>Total Ordenes</h3>
          <p className="kpi-value">{kpis.total_ordenes}</p>
        </div>
        <div className="kpi-card">
          <h3>Total Productos</h3>
          <p className="kpi-value">{kpis.total_productos}</p>
        </div>
        <div className="kpi-card">
          <h3>Ordenes Pendientes</h3>
          <p className="kpi-value">{kpis.ordenes_pendientes}</p>
        </div>
        <div className="kpi-card">
          <h3>Ordenes Completadas</h3>
          <p className="kpi-value">{kpis.ordenes_completadas}</p>
        </div>
      </div>
    </div>
  );
}