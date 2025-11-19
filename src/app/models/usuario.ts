export interface Usuario {
  id?: number;
  nombre: string;
  apellido: string;
  email: string;
  password?: string; // opcional para que no se exponga en peticiones GET
  telefono?: string;
  rol: 'ADMIN' | 'AFILIADO' | 'VISITANTE';
  fechaRegistro?: Date;
  activo: boolean;
}
