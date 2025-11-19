import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  usuario: Usuario | null = null;

  ngOnInit() {
    const u = localStorage.getItem('usuario');
    if (u) this.usuario = JSON.parse(u);
  }
}
