// src/app/models/reserva.ts

import { Usuario } from './usuario';
import { Recurso } from './recurso';
import { Extra } from './extra';
import { Pago } from './pago';

export enum EstadoReserva {
  PENDIENTE = 'PENDIENTE',
  CONFIRMADA = 'CONFIRMADA',
  CANCELADA = 'CANCELADA',
  COMPLETADA = 'COMPLETADA',
  EN_PROCESO = 'EN_PROCESO'
}

export interface Reserva {
  idReserva?: number;
  usuario: Usuario;
  recurso: Recurso;
  extra?: Extra | null;
  fechaInicio: string | Date; // ISO 8601 string format desde el backend
  fechaFin: string | Date;
  estado: EstadoReserva;
  pago?: Pago | null;
}

// Interfaz alternativa para crear una reserva (sin relaciones completas)
export interface ReservaRequest {
  idUsuario: number;
  idRecurso: number;
  idExtra?: number | null;
  fechaInicio: string; // formato: 'YYYY-MM-DDTHH:mm:ss'
  fechaFin: string;
  estado: EstadoReserva;
}

// Interfaz para la respuesta del servidor (con datos anidados)
export interface ReservaResponse {
  idReserva: number;
  usuario: Usuario;
  recurso: Recurso;
  extra?: Extra | null;
  fechaInicio: string;
  fechaFin: string;
  estado: EstadoReserva;
  pago?: Pago | null;
}
