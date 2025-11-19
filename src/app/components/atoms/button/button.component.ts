import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  inputs: ['label', 'type'],
})
export class ButtonComponent {
  label = 'Enviar esto';
  type = 'button';
}
