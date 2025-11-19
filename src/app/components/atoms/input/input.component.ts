// input.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Si usas [(ngModel)]

@Component({
  selector: 'app-input',
  standalone: true,  // Añade esta línea
  imports: [CommonModule, FormsModule],  // Añade esta línea
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() model: any;
}