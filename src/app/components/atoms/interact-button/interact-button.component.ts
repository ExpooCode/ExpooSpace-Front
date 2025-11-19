import { Component } from '@angular/core';

@Component({
  selector: 'app-interact-button',
  standalone: true,
  imports: [],
  templateUrl: './interact-button.component.html',
  styleUrl: './interact-button.component.scss'
})
export class InteractButtonComponent {

  label = 'Interactuar';
  type = 'button';
}
