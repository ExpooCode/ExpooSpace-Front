import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Reserva } from '../../../models/reserva';
import { Usuario } from '../../../models/usuario';
import { Espacio } from '../../../models/recurso';

import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-reserva-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent {

  @Input() usuarios: Usuario[] = [];
  @Input() espacios: Espacio[] = [];
  @Input() reservaEditar: Reserva | null = null;

  @Output() submitForm = new EventEmitter<Reserva>();

  reserva: Reserva = this.inicializarReserva();
  modoEdicion = false;

  ngOnChanges() {
    if (this.reservaEditar) {
      this.reserva = { ...this.reservaEditar };
      this.modoEdicion = true;
    } else {
      this.reserva = this.inicializarReserva();
      this.modoEdicion = false;
    }
  }

 inicializarReserva(): Reserva {
  const now = new Date();
  return {
    id: 0,
    usuarioId: 0,
    espacioId: 0,
    usuario: undefined,
    espacio: undefined,
    fecha: now,
    horas: 1,
    fechaInicio: now,
    fechaFin: new Date(now.getTime() + 60 * 60 * 1000), // +1 hora
    estado: 'PENDIENTE',
    precioTotal: 0,
    pagoId: undefined
  };
}



  enviar(): void {
  if (!this.reserva.usuarioId || !this.reserva.espacioId) {
    alert('Debe seleccionar usuario y espacio');
    return;
  }

  // calcula precioTotal, fechaFin según fechaInicio+horas, etc.
  // ejemplo simple:
  const duracionHoras = this.reserva.horas || 1;
  // supongamos que espacio tiene precioHora si fue cargado en this.reserva.espacio
  if (this.reserva.espacio && typeof this.reserva.espacio.precioHora === 'number') {
    this.reserva.precioTotal = this.reserva.espacio.precioHora * duracionHoras;
  }

  // emitir, llamar servicio, etc.
}
}
