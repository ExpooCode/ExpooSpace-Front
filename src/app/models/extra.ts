// src/app/models/extra.ts

import { Reserva } from './reserva';

export enum TipoExtra {
  PROYECTOR = 'PROYECTOR',
  CARGADOR = 'CARGADOR',
  EXTENSION = 'EXTENSION',
  CAFETERA = 'CAFETERA'
}

export interface Extra {
  idExtra?: number;
  nombre: string;
  tipoExtra: TipoExtra;
  reservas?: Reserva[];
}

// Interfaz simplificada sin relaciones
export interface ExtraSimple {
  idExtra?: number;
  nombre: string;
  tipoExtra: TipoExtra;
}

// Interfaz para crear/actualizar un extra
export interface ExtraRequest {
  nombre: string;
  tipoExtra: TipoExtra;
}

// Interfaz para la respuesta del servidor
export interface ExtraResponse {
  idExtra: number;
  nombre: string;
  tipoExtra: TipoExtra;
  reservas?: Reserva[];
}
