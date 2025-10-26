import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Notice {
    titulo: string;
    url: string;
    fecha: string;
    sentimiento: string;
    imagen?: string;
    autor?: string[];
    resumen?: string;
    categoria?: string;
}

@Injectable({
    providedIn: 'root'
})
export class NoticesService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getNoticias(pais: string = 'es', categoria: string = 'general'): Observable<Notice[]> {
        const url = `${this.apiUrl}?pais=${encodeURIComponent(pais)}&categoria=${encodeURIComponent(categoria)}`;
        console.log('➡️ Llamando a:', url);
        return this.http.get<Notice[]>(url);
    }
}
