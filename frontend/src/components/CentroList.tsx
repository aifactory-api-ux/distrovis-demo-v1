import { Centro } from '../types';

interface CentroListProps {
  centros: Centro[];
  onSelect?: (id: number) => void;
}

export function CentroList({ centros, onSelect }: CentroListProps) {
  return (
    <div className="centro-list">
      <h2>Centros</h2>
      {centros.length === 0 ? (
        <p>No hay centros registrados</p>
      ) : (
        <ul>
          {centros.map((centro) => (
            <li key={centro.id} onClick={() => onSelect?.(centro.id)}>
              <strong>{centro.nombre}</strong> - {centro.ubicacion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}