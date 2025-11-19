// src/app/models/bloqueo-recurso.ts

import { Recurso } from './recurso';

export enum MotivoBloqueo {
  MANTENIMIENTO = 'MANTENIMIENTO',
  REPARACION = 'REPARACION',
  LIMPIEZA = 'LIMPIEZA',
  EVENTO_ESPECIAL = 'EVENTO_PRIVADO',
  RENOVACION = 'RENOVACION',
  FERIADO = 'FERIADO'
}

export interface BloqueoRecurso {
  idBloqueo?: number;
  recurso: Recurso;
  fechaInicio: string | Date;
  fechaFin: string | Date;
  motivo: MotivoBloqueo;
  descripcion?: string;
  activo: boolean;
}

// Interfaz simplificada sin el objeto recurso completo
export interface BloqueoRecursoSimple {
  idBloqueo?: number;
  idRecurso: number;
  nombreRecurso?: string; // útil para mostrar en listas
  fechaInicio: string | Date;
  fechaFin: string | Date;
  motivo: MotivoBloqueo;
  descripcion?: string;
  activo: boolean;
}

// Interfaz para crear un bloqueo
export interface BloqueoRecursoRequest {
  idRecurso: number;
  fechaInicio: string; // formato: 'YYYY-MM-DDTHH:mm:ss'
  fechaFin: string;
  motivo: MotivoBloqueo;
  descripcion?: string;
  activo?: boolean; // opcional, por defecto true
}

// Interfaz para la respuesta del servidor
export interface BloqueoRecursoResponse {
  idBloqueo: number;
  recurso: Recurso;
  fechaInicio: string;
  fechaFin: string;
  motivo: MotivoBloqueo;
  descripcion?: string;
  activo: boolean;
}
