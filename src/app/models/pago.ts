export interface Pago {
  id: number;
  reservaId: number;
  monto: number;
  metodo: 'STRIPE' | 'PAYU' | 'EFECTIVO' | 'TRANSFERENCIA';

  fechaPago: Date;
  fecha?: Date; // alias para evitar errores en tablas

  estado: 'PENDIENTE' | 'APROBADO' | 'FALLIDO';
  referencia?: string;
}
