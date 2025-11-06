import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [NgIf],
    templateUrl: './card.html',
    styleUrls: ['./card.css'],
})
export class Card {
    @Input() img?: string;
    @Input() title?: string;
    @Input() resumen?: string;
    @Input() id?: number;
}
