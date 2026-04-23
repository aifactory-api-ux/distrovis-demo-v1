import { Orden } from '../types';

interface OrdenListProps {
  ordenes: Orden[];
  onSelect?: (id: number) => void;
}

export function OrdenList({ ordenes, onSelect }: OrdenListProps) {
  return (
    <div className="orden-list">
      <h2>Ordenes</h2>
      {ordenes.length === 0 ? (
        <p>No hay ordenes registradas</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Planta ID</th>
              <th>Centro ID</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Estado</th>
              <th>Fecha Creacion</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden) => (
              <tr key={orden.id} onClick={() => onSelect?.(orden.id)}>
                <td>{orden.id}</td>
                <td>{orden.planta_id}</td>
                <td>{orden.centro_id}</td>
                <td>{orden.producto}</td>
                <td>{orden.cantidad}</td>
                <td>{orden.estado}</td>
                <td>{new Date(orden.fecha_creacion).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}