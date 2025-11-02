import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card } from '../../../core/components/card/card';
import { TruncateInteligentePipe } from '../../pipes/truncate-inteligente.pipe';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../../services/news-service';
import { News } from '../../../core/interfaces/new-interface';

@Component({
    selector: 'app-aside',
    standalone: true,
    imports: [CommonModule, Card, TruncateInteligentePipe, RouterLink],
    templateUrl: './aside.html',
    styleUrls: ['./aside.css'],
})
export class Aside implements OnInit {
    noticiasTendencias: News[] = [];
    loading = true;

    constructor(private cache: NewsService) { }

    ngOnInit() {
    setTimeout(() => {
        this.cache.getNews('es', 'lifestyle').subscribe({
            next: (noticias: News[]) => {
                this.noticiasTendencias = noticias.slice(0, 5);
                this.loading = false;
            },
            error: (err: unknown) => {
                console.error('Error cargando tendencias:', err);
                this.loading = false;
            }
        });
    }, 3000);
}
}
