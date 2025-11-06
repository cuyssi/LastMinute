import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  imports: [],
  templateUrl: './simple-card.html',
  styleUrl: './simple-card.css',
})
export class SimpleCard {
    @Input() title?: string;
    @Input() resumen?: string;
}
