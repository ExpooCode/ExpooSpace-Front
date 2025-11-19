import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../models/usuario';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './usuario-form.component.html',
})
export class UsuarioFormComponent {
  
  @Input() usuarioEditar: Usuario | null = null;
  @Output() submitForm = new EventEmitter<Usuario>();

  usuario: Usuario = this.inicializarUsuario();
  modoEdicion = false;

  ngOnChanges(): void {
    if (this.usuarioEditar) {
      this.usuario = { ...this.usuarioEditar };
      this.modoEdicion = true;
    } else {
      this.usuario = this.inicializarUsuario();
      this.modoEdicion = false;
    }
  }

  inicializarUsuario(): Usuario {
    return {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      telefono: '',
      rol: 'VISITANTE',
      fechaRegistro: new Date(),
      activo: true
    };
  }

  enviar(): void {
    if (this.validarFormulario()) {
      const usuarioEnviar: Usuario = {
        ...this.usuario,
        fechaRegistro: this.modoEdicion ? this.usuarioEditar?.fechaRegistro : new Date()
      };

      this.submitForm.emit(usuarioEnviar);

      if (!this.modoEdicion) {
        this.usuario = this.inicializarUsuario();
      }
    }
  }

  validarFormulario(): boolean {
    if (!this.usuario.nombre) {
      alert("El nombre es obligatorio");
      return false;
    }
    if (!this.usuario.apellido) {
      alert("El apellido es obligatorio");
      return false;
    }
    if (!this.usuario.email) {
      alert("El email es obligatorio");
      return false;
    }
    if (!this.modoEdicion && !this.usuario.password) {
      alert("La contraseña es obligatoria al crear un usuario");
      return false;
    }
    return true;
  }

  cancelar(): void {
    this.usuario = this.inicializarUsuario();
    this.modoEdicion = false;
  }
}
