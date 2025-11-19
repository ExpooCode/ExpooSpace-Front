// src/app/models/recurso.ts

import { Reserva } from './reserva';
import { BloqueoRecurso } from './bloqueo-recurso';

export enum Tipo {
  SALA_REUNION = 'SALA_REUNION',
  AUDITORIO = 'AUDITORIO',
  LABORATORIO = 'LABORATORIO',
  OFICINA = 'OFICINA',
  SALON_EVENTOS = 'SALON_EVENTOS',
  ESPACIO_DEPORTIVO = 'ESPACIO_DEPORTIVO',
  OTRO = 'OTRO'
}

export enum EstadoRecurso {
  DISPONIBLE = 'DISPONIBLE',
  OCUPADO = 'OCUPADO',
  MANTENIMIENTO = 'MANTENIMIENTO',
  BLOQUEADO = 'BLOQUEADO',
  FUERA_DE_SERVICIO = 'FUERA_DE_SERVICIO'
}

export interface Recurso {
  idRecurso?: number;
  nombre: string;
  tipo: Tipo;
  capacidad: number;
  estadoRecurso: EstadoRecurso;
  reservas?: Reserva[];
  bloqueos?: BloqueoRecurso[];
}

// Interfaz simplificada sin relaciones anidadas (útil para listar recursos)
export interface RecursoSimple {
  idRecurso?: number;
  nombre: string;
  tipo: Tipo;
  capacidad: number;
  estadoRecurso: EstadoRecurso;
}

// Interfaz para crear/actualizar un recurso
export interface RecursoRequest {
  nombre: string;
  tipo: Tipo;
  capacidad: number;
  estadoRecurso: EstadoRecurso;
}

// Interfaz para la respuesta completa con relaciones
export interface RecursoResponse {
  idRecurso: number;
  nombre: string;
  tipo: Tipo;
  capacidad: number;
  estadoRecurso: EstadoRecurso;
  reservas?: Reserva[];
  bloqueos?: BloqueoRecurso[];
}
