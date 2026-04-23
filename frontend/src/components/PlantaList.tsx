import { Planta } from '../types';

interface PlantaListProps {
  plantas: Planta[];
  onSelect?: (id: number) => void;
}

export function PlantaList({ plantas, onSelect }: PlantaListProps) {
  return (
    <div className="planta-list">
      <h2>Plantas</h2>
      {plantas.length === 0 ? (
        <p>No hay plantas registradas</p>
      ) : (
        <ul>
          {plantas.map((planta) => (
            <li key={planta.id} onClick={() => onSelect?.(planta.id)}>
              <strong>{planta.nombre}</strong> - {planta.ubicacion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}