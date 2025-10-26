import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Api } from '../../../services/api';


@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [HttpClientModule],
    templateUrl: './about-page.html',
    styleUrls: ['./about-page.css']
})
export class AboutPage implements OnInit {
    mensaje = '';

    constructor(private apiService: Api) { }

    ngOnInit(): void {
        this.apiService.ping().subscribe({
            next: (res) => {
                this.mensaje = res;
                console.log('Respuesta del backend:', res);
            },
            error: (err) => {
                console.error('Error al hacer ping:', err);
            }
        });
    }
}
