import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recurso } from '../models/recurso';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private apiUrl = 'http://localhost:8080/api/recurso';

  constructor(private http: HttpClient) {}

  getEspacios(): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(this.apiUrl);
  }

  getEspacioById(id: number): Observable<Recurso> {
    return this.http.get<Recurso>(`${this.apiUrl}/${id}`);
  }

  crearEspacio(espacio: Recurso): Observable<Recurso> {
    return this.http.post<Recurso>(this.apiUrl, espacio);
  }

  actualizarEspacio(id: number, espacio: Recurso): Observable<Recurso> {
    return this.http.put<Recurso>(`${this.apiUrl}/${id}`, espacio);
  }

  eliminarEspacio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
