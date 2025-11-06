import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, signal } from "@angular/core";
import { HoroscopeResponse, HoroscopeService } from "../../../services/horoscope-service";
import { NoNews } from "../../../shared/components/no-news/no-news";
import { Skeleton } from "../../../shared/components/skeleton/skeleton";
import { InfoSection } from "../../components/info-section/info-section";
import { SimpleCard } from "../../components/simple-card/simple-card";


@Component({
  selector: 'app-horoscopo-page',
  standalone: true,
  imports: [CommonModule, Skeleton, SimpleCard, NoNews, InfoSection],
  templateUrl: './horoscopo-page.html',
})
export default class HoroscopoPage implements OnInit {
  horoscopos = signal<HoroscopeResponse[]>([]);
  loading = signal(true);
  arraySkeleton = 12;

  readonly horoscopeService = inject(HoroscopeService);

  ngOnInit(): void {
    console.log('🪄 HoroscopoPage inicializado');
    this.cargarHoroscopos();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cargarHoroscopos(): void {
    console.log('🔮 Cargando horóscopos...');
    this.horoscopeService.getAllHoroscopes().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.horoscopos.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error cargando horóscopos:', err);
        this.loading.set(false);
      }
    });
  }

  get skeletonArray() {
    return Array.from({ length: this.arraySkeleton });
  }
}
