import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Espacio } from '../../../models/recurso';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-espacio-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './espacio-form.component.html',
  styleUrls: ['./espacio-form.component.scss']
})
export class EspacioFormComponent {

  @Input() espacioEditar: Espacio | null = null;
  @Output() submitForm = new EventEmitter<Espacio>();

  espacio: Espacio = this.inicializarEspacio();
  modoEdicion = false;

  ngOnChanges(): void {
    if (this.espacioEditar) {
      this.espacio = { ...this.espacioEditar };
      this.modoEdicion = true;
    } else {
      this.espacio = this.inicializarEspacio();
      this.modoEdicion = false;
    }
  }

  inicializarEspacio(): Espacio {
    return {
      id: 0,
      nombre: '',
      tipo: 'SALA_REUNIONES',
      capacidad: 1,
      descripcion: '',
      ubicacion: '',
      precioHora: 0,
      disponible: true,
      imagenUrl: ''
    };
  }

  enviar(): void {
    if (!this.espacio.nombre || !this.espacio.precioHora) {
      alert("Nombre y precio por hora son obligatorios");
      return;
    }

    this.submitForm.emit(this.espacio);

    if (!this.modoEdicion) {
      this.espacio = this.inicializarEspacio();
    }
  }

  cancelar(): void {
    this.espacio = this.inicializarEspacio();
    this.modoEdicion = false;
  }
}
