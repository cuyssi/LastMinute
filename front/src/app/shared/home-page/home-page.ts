import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { News } from '../../services/news';
import { Card } from '../../core/components/card/card';
import { Hero } from '../../core/components/hero/hero';
import { TruncateInteligentePipe } from '../pipes/truncate-inteligente.pipe';
import { NoticiasCacheService } from '../../services/news-cache-service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        HttpClientModule,
        Card,
        Hero,
        TruncateInteligentePipe,
        RouterLink,
    ],
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})
export default class HomePage implements OnInit {
    noticiasTendencias: News[] = [];
    noticiasPolitica: News[] = [];
    noticiasDeportes: News[] = [];

    loading = true;
    error: string | null = null;

    constructor(private noticiasCache: NoticiasCacheService) { }

    ngOnInit(): void {
        this.cargarTendencias();
    }

    private cargarTendencias(): void {
        this.noticiasCache.getNews('lifestyle').subscribe((tendencias: News[]) => {
            this.noticiasTendencias = this.filtrarConFallback(tendencias);
            this.cargarPolitica();
        });
    }

    private cargarPolitica(): void {
        this.noticiasCache.getNews('politica').subscribe((politica: News[]) => {
            this.noticiasPolitica = this.filtrarConFallback(politica);
            this.cargarDeportes();
        });
    }

    private cargarDeportes(): void {
        this.noticiasCache.getNews('sports').subscribe((deportes: News[]) => {
            this.noticiasDeportes = this.filtrarConFallback(deportes);
            this.loading = false;
        });
    }

    private filtrarConFallback(noticias: News[]): News[] {
        const conImagen = noticias.filter(n => !!n.imagen);
        return conImagen.length ? conImagen.slice(0, 6) : noticias.slice(0, 6);
    }

    @Input() img!: string;
    @Input() title?: string;
    @Input() resumen?: string;
    @Input() url?: string;
    @Input() news?: News;
}
