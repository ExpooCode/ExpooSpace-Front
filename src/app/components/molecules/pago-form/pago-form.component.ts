import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pago } from '../../../models/pago';
import { Reserva } from '../../../models/reserva';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-pago-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.scss']
})
export class PagoFormComponent {

  @Input() reservas: Reserva[] = [];
  @Input() pagoEditar: Pago | null = null;

  @Output() submitForm = new EventEmitter<Pago>();

  pago: Pago = this.inicializarPago();
  modoEdicion = false;

  ngOnChanges() {
    if (this.pagoEditar) {
      this.pago = { ...this.pagoEditar };
      this.modoEdicion = true;
    } else {
      this.pago = this.inicializarPago();
      this.modoEdicion = false;
    }
  }

  inicializarPago(): Pago {
    return {
      id: 0,
      reservaId: 0,
      monto: 0,
      metodo: 'EFECTIVO',
      fechaPago: new Date(),
      estado: 'PENDIENTE'
    };
  }

  enviar() {
    if (!this.pago.reservaId) {
      alert('Debe seleccionar una reserva válida');
      return;
    }

    this.submitForm.emit(this.pago);
  }
}
