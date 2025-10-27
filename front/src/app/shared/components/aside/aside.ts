import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasCacheService } from '../../../services/news-cache-service';
import { News } from '../../../services/news';
import { Card } from '../../../core/components/card/card';
import { TruncateInteligentePipe } from '../../pipes/truncate-inteligente.pipe';
import { RouterLink } from '@angular/router';

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

    constructor(private cache: NoticiasCacheService) { }

    ngOnInit() {

        this.cache.getNews('lifestyle').subscribe({
            next: (noticias) => {
                this.noticiasTendencias = noticias.slice(0, 5);
                this.loading = false;
            },
            error: (err) => {
                console.error('Error cargando tendencias:', err);
                this.loading = false;
            },
        });
    }
}
