import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva';

import { DashboardPageTemplateComponent } from '../../../components/templates/dashboard-page-template/dashboard-page-template.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DashboardPageTemplateComponent
  ],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {

  reservas: Reserva[] = [];
  cargando = false;
  mensaje = { texto: '', tipo: '' as 'exito' | 'error' | '' };

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.cargando = true;

    this.reservaService.obtenerTodas().subscribe({
      next: (data) => {
        this.reservas = data;
        this.cargando = false;
      },
      error: () => {
        this.mostrarMensaje("Error al cargar reservas.", "error");
      }
    });
  }

  mostrarMensaje(texto: string, tipo: 'exito' | 'error') {
    this.mensaje = { texto, tipo };
    setTimeout(() => this.mensaje = { texto: '', tipo: '' }, 4000);
  }
}
