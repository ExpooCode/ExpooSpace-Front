import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';
import { RecursoService} from '../../../services/recurso.service';
import { ReservaService } from '../../../services/reserva.service';
import { PagoService } from '../../../services/pago.service';

import { Usuario } from '../../../models/usuario';
import { Recurso } from '../../../models/recurso';
import { Reserva } from '../../../models/reserva';
import { Pago } from '../../../models/pago';


import { DashboardPageTemplateComponent } from '../../templates/dashboard-page-template/dashboard-page-template.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [
    CommonModule,
    RouterModule,
    DashboardPageTemplateComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  usuarios: Usuario[] = [];
  recursos: Recurso[] = [];
  reservas: Reserva[] = [];
  pagos: Pago[] = [];

  cargando = false;
  mensaje = {
    texto: '',
    tipo: '' as 'exito' | 'error' | ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private recursoService: RecursoService,
    private reservaService: ReservaService,
    private pagoService: PagoService
  ) {}

  ngOnInit(): void {
    this.cargarDashboard();
  }

  cargarDashboard(): void {
    this.cargando = true;

    this.usuarioService.obtenerTodos().subscribe({
      next: (data) => this.usuarios = data
    });

    this.recursoService.getEspacios().subscribe({
      next: (data) => this.recursos = data
    });

    this.reservaService.getReservas().subscribe({
      next: (data) => this.reservas = data
    });

    this.pagoService.obtenerTodos().subscribe({
      next: (data) => {
        this.pagos = data;
        this.cargando = false;
      },
      error: () => {
        this.mostrarMensaje("Error al cargar datos.", "error");
      }
    });
  }

  mostrarMensaje(texto: string, tipo: 'exito' | 'error'): void {
    this.mensaje = { texto, tipo };
    setTimeout(() => this.mensaje = { texto: '', tipo: '' }, 4000);
  }
}
