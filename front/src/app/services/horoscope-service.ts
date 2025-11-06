import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface HoroscopeResponse {
  signo: string;
  horoscopo: string;
}

@Injectable({ providedIn: 'root' })
export class HoroscopeService {
  private apiUrl = environment.apiUrl;
  readonly #http = inject(HttpClient);

  getHoroscope(signo: string): Observable<HoroscopeResponse> {
    return this.#http
      .get<HoroscopeResponse>(`${this.apiUrl}/horoscopo?signo=${signo}`)
      .pipe(catchError(() => of({ signo, horoscopo: 'No se pudo cargar el horóscopo.' })));
  }

  // 🔮 NUEVO: obtener todos los signos a la vez
  getAllHoroscopes(): Observable<HoroscopeResponse[]> {
    const signos = [
      'aries',
      'taurus',
      'gemini',
      'cancer',
      'leo',
      'virgo',
      'libra',
      'scorpio',
      'sagittarius',
      'capricorn',
      'aquarius',
      'pisces',
    ];

    const peticiones = signos.map((s) => {
      console.log('➡️ Llamando a', s);
      return this.getHoroscope(s);
    });

    return forkJoin(peticiones).pipe(
      map((res) => {
        console.log('📦 forkJoin completado:', res);
        return res.filter(Boolean);
      })
    );
  }
}
