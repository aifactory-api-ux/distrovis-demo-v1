import { useState } from 'react';
import { usePlantas } from './hooks/usePlantas';
import { useCentros } from './hooks/useCentros';
import { useOrdenes } from './hooks/useOrdenes';
import { useKPIs } from './hooks/useKPIs';
import { PlantaList } from './components/PlantaList';
import { PlantaForm } from './components/PlantaForm';
import { CentroList } from './components/CentroList';
import { CentroForm } from './components/CentroForm';
import { OrdenList } from './components/OrdenList';
import { OrdenForm } from './components/OrdenForm';
import { KPIDashboard } from './components/KPIDashboard';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'plantas' | 'centros' | 'ordenes'>('dashboard');

  const { plantas, loading: loadingPlantas, createPlanta } = usePlantas();
  const { centros, loading: loadingCentros, createCentro } = useCentros();
  const { ordenes, loading: loadingOrdenes, createOrden } = useOrdenes();
  const { kpis, loading: loadingKpis, refreshKPIs } = useKPIs();

  const handleCreateOrden = async (data: any) => {
    await createOrden(data);
    refreshKPIs();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>Distrovis</h1>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </header>

      <nav>
        <button onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
          Dashboard
        </button>
        <button onClick={() => setActiveTab('plantas')} className={activeTab === 'plantas' ? 'active' : ''}>
          Plantas
        </button>
        <button onClick={() => setActiveTab('centros')} className={activeTab === 'centros' ? 'active' : ''}>
          Centros
        </button>
        <button onClick={() => setActiveTab('ordenes')} className={activeTab === 'ordenes' ? 'active' : ''}>
          Ordenes
        </button>
      </nav>

      <main>
        {activeTab === 'dashboard' && (
          <div>
            <KPIDashboard kpis={kpis} loading={loadingKpis} />
            <section className="ordenes-section">
              <OrdenList ordenes={ordenes} />
              <OrdenForm
                plantas={plantas}
                centros={centros}
                onSubmit={handleCreateOrden}
                loading={loadingOrdenes}
              />
            </section>
          </div>
        )}

        {activeTab === 'plantas' && (
          <div>
            <PlantaList plantas={plantas} />
            <PlantaForm onSubmit={createPlanta} loading={loadingPlantas} />
          </div>
        )}

        {activeTab === 'centros' && (
          <div>
            <CentroList centros={centros} />
            <CentroForm onSubmit={createCentro} loading={loadingCentros} />
          </div>
        )}

        {activeTab === 'ordenes' && (
          <div>
            <OrdenList ordenes={ordenes} />
            <OrdenForm
              plantas={plantas}
              centros={centros}
              onSubmit={handleCreateOrden}
              loading={loadingOrdenes}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;