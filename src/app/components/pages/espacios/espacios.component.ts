import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EspacioService } from '../../../services/recurso.service';
import { Espacio } from '../../../models/recurso';

import { DashboardPageTemplateComponent } from '../../../components/templates/dashboard-page-template/dashboard-page-template.component';

@Component({
  selector: 'app-espacios',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DashboardPageTemplateComponent
  ],
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss']
})
export class EspaciosComponent {

  espacios: Espacio[] = [];
  cargando = false;
  mensaje = { texto: '', tipo: '' as 'exito' | 'error' | '' };

  constructor(private espacioService: EspacioService) {}

  ngOnInit(): void {
    this.cargarEspacios();
  }

  cargarEspacios(): void {
    this.cargando = true;

    this.espacioService.obtenerTodos().subscribe({
      next: (data) => {
        this.espacios = data;
        this.cargando = false;
      },
      error: () => {
        this.mostrarMensaje("Error al cargar espacios.", "error");
      }
    });
  }

  mostrarMensaje(texto: string, tipo: 'exito' | 'error') {
    this.mensaje = { texto, tipo };
    setTimeout(() => this.mensaje = { texto: '', tipo: '' }, 4000);
  }
}
