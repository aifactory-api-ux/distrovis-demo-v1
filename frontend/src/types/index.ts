export interface Planta {
  id: number;
  nombre: string;
  ubicacion: string;
}

export interface PlantaCreate {
  nombre: string;
  ubicacion: string;
}

export interface Centro {
  id: number;
  nombre: string;
  ubicacion: string;
}

export interface CentroCreate {
  nombre: string;
  ubicacion: string;
}

export interface Orden {
  id: number;
  planta_id: number;
  centro_id: number;
  producto: string;
  cantidad: number;
  estado: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

export interface OrdenCreate {
  planta_id: number;
  centro_id: number;
  producto: string;
  cantidad: number;
  estado: string;
}

export interface KPIResponse {
  total_ordenes: number;
  total_productos: number;
  ordenes_pendientes: number;
  ordenes_completadas: number;
}