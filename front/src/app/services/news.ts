import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface News {
    id: string;
    titulo: string;
    url: string;
    fecha: string;
    sentimiento?: string;
    imagen?: string;
    autor?: string[];
    resumen?: string;
    categoria?: string;
}

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getNews(pais: string = 'es', categoria: string = 'general'): Observable<News[]> {
        const url = `${this.apiUrl}?pais=${encodeURIComponent(pais)}&categoria=${encodeURIComponent(categoria)}`;
        console.log('➡️ Llamando a:', url);
        return this.http.get<News[]>(url);
    }
}
