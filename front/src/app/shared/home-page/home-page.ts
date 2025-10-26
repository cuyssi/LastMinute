import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Notice } from '../../services/notices';
import { Card } from '../../core/components/card/card';
import { Carousel } from '../../core/components/carousel/carousel';
import { Hero } from '../../core/components/hero/hero';
import { TruncateInteligentePipe } from '../pipes/truncate-inteligente.pipe';
import { NoticiasCacheService } from '../../services/noticias-cache-service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        HttpClientModule,
        Carousel,
        Card,
        Hero,
        TruncateInteligentePipe
    ],
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})
export default class HomePage implements OnInit {
    noticiasTendencias: Notice[] = [];
    noticiasPolitica: Notice[] = [];
    noticiasDeportes: Notice[] = [];

    loading = true;
    error: string | null = null;

    constructor(private noticiasCache: NoticiasCacheService) { }

    ngOnInit(): void {
        this.cargarTendencias();
    }

    private cargarTendencias(): void {
        this.noticiasCache.getNoticias('lifestyle').subscribe((tendencias: Notice[]) => {

            this.noticiasTendencias = this.filtrarConFallback(tendencias);
            this.cargarPolitica();
        });
    }

    private cargarPolitica(): void {
        this.noticiasCache.getNoticias('politica').subscribe((politica: Notice[]) => {
            this.noticiasPolitica = this.filtrarConFallback(politica);
            this.cargarDeportes();
        });
    }

    private cargarDeportes(): void {
        this.noticiasCache.getNoticias('sports').subscribe((deportes: Notice[]) => {
            this.noticiasDeportes = this.filtrarConFallback(deportes);
            this.loading = false;
        });
    }

    private filtrarConFallback(noticias: Notice[]): Notice[] {
        const conImagen = noticias.filter(n => !!n.imagen);
        return conImagen.length ? conImagen.slice(0, 6) : noticias.slice(0, 6);
    }
}
