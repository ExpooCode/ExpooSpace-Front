import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'http://localhost:8080/api/pagos';

  constructor(private http: HttpClient) {}

  getPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(this.apiUrl);
  }

  getPagoByReserva(idReserva: number): Observable<Pago> {
    return this.http.get<Pago>(`${this.apiUrl}/reserva/${idReserva}`);
  }

  procesarPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(this.apiUrl, pago);
  }

  actualizarPago(id: number, pago: Pago): Observable<Pago> {
    return this.http.put<Pago>(`${this.apiUrl}/${id}`, pago);
  }
  obtenerTodos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(this.apiUrl);
  }
}
