import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { News } from '../core/interfaces/new-interface';
import { mockNoticias } from '../core/interfaces/mockNotice';

@Injectable({ providedIn: 'root' })
export class NewsService {
    private apiUrl = environment.apiUrl;
    readonly #http = inject(HttpClient)




    getNews(pais: string = 'es', categoria: string = 'general'): Observable<News[]> {
  return this.#http
    .get<News[]>(`${this.apiUrl}?pais=${encodeURIComponent(pais)}&categoria=${encodeURIComponent(categoria)}`)
    .pipe(
      delay(3000), // ⏱️ espera 1 segundo antes de emitir los datos
      catchError(err => {
        console.warn(`⚠️ Error al cargar ${categoria}, usando mock`, err);
        return of(mockNoticias.filter(n => n.categoria === categoria));
      })
    );
}
}
