import { Component, OnInit, inject, signal } from '@angular/core';
import { NewsService } from '../../services/news-service';
import { News } from '../../core/interfaces/new-interface';
import { NewSection } from '../components/new-section/new-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NewSection
  ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export default class HomePage implements OnInit {
  noticiasPolitica = signal<News[]>([]);
  noticiasDeportes = signal<News[]>([]);
  loadingPolitica = signal<boolean>(true);
  loadingDeportes = signal<boolean>(true);
  noticiasFiltradas = signal<News[]>([]);
  arrayHome: number = 4
  arrayPolitica: number = 6
  tipoNoticias: string[] = ['politica', 'deportes'];

  readonly noticiasService = inject(NewsService);

  ngOnInit(): void {
    this.cargarNoticias();
  }

  cargarNoticias() {
    for (const tipo of this.tipoNoticias) {
      this.noticiasService.getNews('es',tipo).subscribe({
        next: (data: News[]) => {
          setTimeout(() => {
            const filtradas = this.filtrarConFallback(data);

            if (tipo === 'politica') {
              this.noticiasPolitica.set(filtradas);
              this.loadingPolitica.set(false);
            } else if (tipo === 'deportes') {
              this.noticiasDeportes.set(filtradas);
              this.loadingDeportes.set(false);
            }
          }, 3000);
        },
        error: (err) => {
          console.log(`Error cargando noticias de ${tipo}: ${err.message}`)
          if (tipo === 'politica') this.loadingPolitica.set(false);
          if (tipo === 'deportes') this.loadingDeportes.set(false);
        }
      });
    }
  }

  private filtrarConFallback(noticias: News[]): News[] {
    const conImagen = noticias.filter(n => !!n.imagen);
    return conImagen.length ? conImagen.slice(0, 6) : noticias.slice(0, 6);
  }
}
