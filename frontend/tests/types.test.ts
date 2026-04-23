import { describe, it, expect } from 'vitest';
import { Planta, Centro, Orden, OrdenCreate, KPIResponse } from '../src/types';

describe('Types', () => {
  describe('Planta', () => {
    it('has correct structure', () => {
      const planta: Planta = { id: 1, nombre: 'Test', ubicacion: 'City' };
      expect(planta.id).toBe(1);
      expect(planta.nombre).toBe('Test');
      expect(planta.ubicacion).toBe('City');
    });
  });

  describe('Centro', () => {
    it('has correct structure', () => {
      const centro: Centro = { id: 1, nombre: 'Test', ubicacion: 'City' };
      expect(centro.id).toBe(1);
      expect(centro.nombre).toBe('Test');
      expect(centro.ubicacion).toBe('City');
    });
  });

  describe('Orden', () => {
    it('has correct structure', () => {
      const orden: Orden = {
        id: 1,
        planta_id: 1,
        centro_id: 2,
        producto: 'Test',
        cantidad: 100,
        estado: 'pendiente',
        fecha_creacion: '2024-01-01',
        fecha_actualizacion: '2024-01-01',
      };
      expect(orden.id).toBe(1);
      expect(orden.planta_id).toBe(1);
      expect(orden.centro_id).toBe(2);
      expect(orden.producto).toBe('Test');
      expect(orden.cantidad).toBe(100);
      expect(orden.estado).toBe('pendiente');
    });
  });

  describe('OrdenCreate', () => {
    it('has correct structure', () => {
      const orden: OrdenCreate = {
        planta_id: 1,
        centro_id: 2,
        producto: 'Test',
        cantidad: 100,
        estado: 'pendiente',
      };
      expect(orden.planta_id).toBe(1);
      expect(orden.centro_id).toBe(2);
      expect(orden.producto).toBe('Test');
      expect(orden.cantidad).toBe(100);
      expect(orden.estado).toBe('pendiente');
    });
  });

  describe('KPIResponse', () => {
    it('has correct structure', () => {
      const kpi: KPIResponse = {
        total_ordenes: 10,
        total_productos: 500,
        ordenes_pendientes: 3,
        ordenes_completadas: 7,
      };
      expect(kpi.total_ordenes).toBe(10);
      expect(kpi.total_productos).toBe(500);
      expect(kpi.ordenes_pendientes).toBe(3);
      expect(kpi.ordenes_completadas).toBe(7);
    });
  });
});