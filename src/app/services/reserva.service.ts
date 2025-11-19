import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://localhost:8080/api/reservas';

  constructor(private http: HttpClient) {}

  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  getReservasByUsuario(idUsuario: number): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }

  getReservaById(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.apiUrl}/${id}`);
  }

  crearReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.apiUrl, reserva);
  }

  actualizarReserva(id: number, reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(`${this.apiUrl}/${id}`, reserva);
  }

  cancelarReserva(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
