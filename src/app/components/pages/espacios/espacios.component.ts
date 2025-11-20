import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Espacio {
  id: number;
  nombre: string;
  tipo: 'oficina-privada' | 'puesto-compartido' | 'sala-reunion';
  capacidad: number;
  precio: number;
  imagen: string;
  amenidades: string[];
  disponible: boolean;
}

interface Reserva {
  espacioId: number;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  nombreUsuario: string;
  email: string;
}

@Component({
  selector: 'app-espacios', // ← CAMBIÉ A "espacios"
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.scss']
})
export class EspaciosComponent implements OnInit { // ← CAMBIÉ A "EspaciosComponent"
  espacios: Espacio[] = [
    {
      id: 1,
      nombre: 'Oficina Premium',
      tipo: 'oficina-privada',
      capacidad: 4,
      precio: 50,
      imagen: '🏢',
      amenidades: ['WiFi', 'Aire acondicionado', 'Pizarra', 'TV 4K'],
      disponible: true
    },
    {
      id: 2,
      nombre: 'Sala de Reuniones',
      tipo: 'sala-reunion',
      capacidad: 10,
      precio: 80,
      imagen: '👥',
      amenidades: ['Proyector', 'Videoconferencia', 'WiFi', 'Catering'],
      disponible: true
    },
    {
      id: 3,
      nombre: 'Puesto Individual',
      tipo: 'puesto-compartido',
      capacidad: 1,
      precio: 15,
      imagen: '💻',
      amenidades: ['WiFi', 'Escritorio', 'Silla ergonómica', 'Locker'],
      disponible: true
    },
    {
      id: 4,
      nombre: 'Oficina Ejecutiva',
      tipo: 'oficina-privada',
      capacidad: 2,
      precio: 65,
      imagen: '🎯',
      amenidades: ['WiFi', 'Muebles de lujo', 'Vista panorámica', 'Privacidad'],
      disponible: false
    },
    {
      id: 5,
      nombre: 'Sala Creativa',
      tipo: 'sala-reunion',
      capacidad: 8,
      precio: 70,
      imagen: '🎨',
      amenidades: ['Pizarra blanca', 'Iluminación LED', 'WiFi', 'Sofás'],
      disponible: true
    },
    {
      id: 6,
      nombre: 'Espacio Colaborativo',
      tipo: 'puesto-compartido',
      capacidad: 6,
      precio: 25,
      imagen: '🤝',
      amenidades: ['WiFi', 'Mesa compartida', 'Café gratis', 'Enchufes'],
      disponible: true
    }
  ];

  tiposEspacio = [
    { valor: 'todos', nombre: 'Todos' },
    { valor: 'oficina-privada', nombre: 'Oficinas Privadas' },
    { valor: 'sala-reunion', nombre: 'Salas de Reunión' },
    { valor: 'puesto-compartido', nombre: 'Puestos Compartidos' }
  ];

  filtroActivo = 'todos';
  espaciosFiltrados: Espacio[] = [];
  mostrarModal = false;
  mostrarConfirmacion = false;
  espacioSeleccionado: Espacio | null = null;
  fechaMinima = '';

  nuevaReserva: Reserva = {
    espacioId: 0,
    fecha: '',
    horaInicio: '',
    horaFin: '',
    nombreUsuario: '',
    email: ''
  };

  ngOnInit() {
    this.espaciosFiltrados = this.espacios;
    const hoy = new Date();
    this.fechaMinima = hoy.toISOString().split('T')[0];
  }

  filtrarPorTipo(tipo: string) {
    this.filtroActivo = tipo;
    if (tipo === 'todos') {
      this.espaciosFiltrados = this.espacios;
    } else {
      this.espaciosFiltrados = this.espacios.filter(e => e.tipo === tipo);
    }
  }

  scrollToSpaces() {
    const element = document.getElementById('espacios');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  abrirModalReserva(espacio: Espacio) {
    this.espacioSeleccionado = espacio;
    this.nuevaReserva.espacioId = espacio.id;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.resetearFormulario();
  }

  confirmarReserva() {
    console.log('Reserva confirmada:', this.nuevaReserva);
    this.mostrarModal = false;
    this.mostrarConfirmacion = true;
  }

  cerrarConfirmacion() {
    this.mostrarConfirmacion = false;
    this.resetearFormulario();
  }

  resetearFormulario() {
    this.nuevaReserva = {
      espacioId: 0,
      fecha: '',
      horaInicio: '',
      horaFin: '',
      nombreUsuario: '',
      email: ''
    };
  }
}
