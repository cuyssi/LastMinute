import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Notice, NoticesService } from './notices';

interface CachedData {
  data: Notice[];
  timestamp: number;
}

@Injectable({ providedIn: 'root' })
export class NoticiasCacheService {
  private cache: Record<string, CachedData> = {};
  private readonly CACHE_KEY = 'noticiasCache';
  private readonly TTL = 24 * 60 * 60 * 1000;

  constructor(private noticesService: NoticesService) {
    const stored = localStorage.getItem(this.CACHE_KEY);
    if (stored) this.cache = JSON.parse(stored);
  }

  getNoticias(categoria: string): Observable<Notice[]> {
    const cached = this.cache[categoria];
    const ahora = Date.now();

    if (cached && ahora - cached.timestamp < this.TTL) {
      return of(cached.data);
    }

    return this.noticesService.getNoticias('es', categoria).pipe(
      tap(data => {
        this.cache[categoria] = { data, timestamp: ahora };
        localStorage.setItem(this.CACHE_KEY, JSON.stringify(this.cache));
      }),
      catchError(err => {
        console.error(`Error ${categoria}:`, err);
        return of([]);
      })
    );
  }

  limpiarCache() {
    this.cache = {};
    localStorage.removeItem(this.CACHE_KEY);
  }
}
