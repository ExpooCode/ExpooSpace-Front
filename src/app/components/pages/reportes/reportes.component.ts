import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { UsuarioService } from '../../../services/usuario.service';
import { ReservaService } from '../../../services/reserva.service';
import { PagoService } from '../../../services/pago.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
})
export class ReportesComponent {

  totalUsuarios = 0;
  totalReservas = 0;
  totalPagos = 0;
  ingresosTotales = 0;

  constructor(
    private usuarioService: UsuarioService,
    private reservaService: ReservaService,
    private pagoService: PagoService
  ) {}

  ngOnInit() {
    this.usuarioService.obtenerTodos().subscribe({
      next: users => this.totalUsuarios = users.length
    });

    this.reservaService.obtenerTodas().subscribe({
      next: reservas => this.totalReservas = reservas.length
    });

    this.pagoService.obtenerTodos().subscribe({
      next: pagos => {
        this.totalPagos = pagos.length;
        this.ingresosTotales = pagos
          .filter(p => p.estado === 'APROBADO')
          .reduce((s, p) => s + p.monto, 0);
      }
    });
  }
}
