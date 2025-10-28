import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from './news';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class NewsService {
    private apiUrl = environment.apiUrl;

    private mockNoticias: News[] = [
        {
            id: "1",
            imagen: 'https://images.pexels.com/photos/264600/pexels-photo-264600.jpeg',
            titulo: 'News Mock 1',
            url: 'https://example.com/mock1',
            fecha: '2025-01-01',
            categoria: 'sports',
            resumen: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, imperdiet ac augue vel, volutpat suscipit dolor. Aliquam tempus magna et nisi vulputate gravida. Suspendisse efficitur egestas sem vitae vehicula. Pellentesque pulvinar tortor nec nibh fermentum, vitae convallis elit luctus. Curabitur porttitor commodo ultrices. Phasellus nunc ligula, pretium in tellus quis, tempus semper nulla. Nunc eget bibendum augue. Etiam congue, magna at lacinia cursus, tortor eros ultrices ligula, tempus imperdiet orci tortor sit amet velit. Praesent ut purus ac massa venenatis scelerisque.

Sed ultricies mi leo, non rutrum odio lacinia in. Cras ornare arcu vitae dictum viverra. Vivamus ullamcorper libero quis nisl sodales, ut iaculis elit fermentum. Morbi aliquam, augue sit amet tristique porttitor, nibh mauris faucibus nibh, ac dapibus mauris quam vitae tortor. Vivamus mi ligula, fringilla eget eleifend a, rutrum eu augue. Ut eu erat imperdiet, finibus ex id, rhoncus mi. In ultrices justo posuere nulla laoreet rutrum. Vivamus id eros at est vulputate convallis sed quis sapien.

Nulla facilisi. Phasellus ultrices metus at ante auctor, ac tempor ex ornare. Morbi ut augue ornare, eleifend ipsum ut, scelerisque dolor. Proin eleifend sapien nec finibus molestie. Proin luctus nisl nec mi luctus commodo. Fusce eget elit eget magna auctor convallis vel nec nisi. Curabitur sit amet finibus diam. Aliquam id orci magna. Fusce id tortor sed massa luctus semper. Etiam a rutrum est. Mauris suscipit consequat nibh, a pellentesque magna dapibus eget. Sed commodo neque at nulla commodo rhoncus. Praesent rutrum felis a mauris molestie sodales.`,


        },
        {
            id: "2",
            imagen: 'https://images.pexels.com/photos/34174906/pexels-photo-34174906.jpeg',
            titulo: 'News Mock 2',
            url: 'https://example.com/mock2',
            fecha: '2025-01-02',
            categoria: 'politica',
            resumen: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, imperdiet ac augue vel, volutpat suscipit dolor. Aliquam tempus magna et nisi vulputate gravida. Suspendisse efficitur egestas sem vitae vehicula. Pellentesque pulvinar tortor nec nibh fermentum, vitae convallis elit luctus. Curabitur porttitor commodo ultrices. Phasellus nunc ligula, pretium in tellus quis, tempus semper nulla. Nunc eget bibendum augue. Etiam congue, magna at lacinia cursus, tortor eros ultrices ligula, tempus imperdiet orci tortor sit amet velit. Praesent ut purus ac massa venenatis scelerisque.

Sed ultricies mi leo, non rutrum odio lacinia in. Cras ornare arcu vitae dictum viverra. Vivamus ullamcorper libero quis nisl sodales, ut iaculis elit fermentum. Morbi aliquam, augue sit amet tristique porttitor, nibh mauris faucibus nibh, ac dapibus mauris quam vitae tortor. Vivamus mi ligula, fringilla eget eleifend a, rutrum eu augue. Ut eu erat imperdiet, finibus ex id, rhoncus mi. In ultrices justo posuere nulla laoreet rutrum. Vivamus id eros at est vulputate convallis sed quis sapien.

Nulla facilisi. Phasellus ultrices metus at ante auctor, ac tempor ex ornare. Morbi ut augue ornare, eleifend ipsum ut, scelerisque dolor. Proin eleifend sapien nec finibus molestie. Proin luctus nisl nec mi luctus commodo. Fusce eget elit eget magna auctor convallis vel nec nisi. Curabitur sit amet finibus diam. Aliquam id orci magna. Fusce id tortor sed massa luctus semper. Etiam a rutrum est. Mauris suscipit consequat nibh, a pellentesque magna dapibus eget. Sed commodo neque at nulla commodo rhoncus. Praesent rutrum felis a mauris molestie sodales.`,


        },
        {
            id: "3",
            imagen: 'https://images.pexels.com/photos/34335702/pexels-photo-34335702.jpeg',
            titulo: 'News Mock 2',
            url: 'https://example.com/mock2',
            fecha: '2025-01-02',
            categoria: 'lifestyle',
            resumen: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, imperdiet ac augue vel, volutpat suscipit dolor. Aliquam tempus magna et nisi vulputate gravida. Suspendisse efficitur egestas sem vitae vehicula. Pellentesque pulvinar tortor nec nibh fermentum, vitae convallis elit luctus. Curabitur porttitor commodo ultrices. Phasellus nunc ligula, pretium in tellus quis, tempus semper nulla. Nunc eget bibendum augue. Etiam congue, magna at lacinia cursus, tortor eros ultrices ligula, tempus imperdiet orci tortor sit amet velit. Praesent ut purus ac massa venenatis scelerisque.

Sed ultricies mi leo, non rutrum odio lacinia in. Cras ornare arcu vitae dictum viverra. Vivamus ullamcorper libero quis nisl sodales, ut iaculis elit fermentum. Morbi aliquam, augue sit amet tristique porttitor, nibh mauris faucibus nibh, ac dapibus mauris quam vitae tortor. Vivamus mi ligula, fringilla eget eleifend a, rutrum eu augue. Ut eu erat imperdiet, finibus ex id, rhoncus mi. In ultrices justo posuere nulla laoreet rutrum. Vivamus id eros at est vulputate convallis sed quis sapien.

Nulla facilisi. Phasellus ultrices metus at ante auctor, ac tempor ex ornare. Morbi ut augue ornare, eleifend ipsum ut, scelerisque dolor. Proin eleifend sapien nec finibus molestie. Proin luctus nisl nec mi luctus commodo. Fusce eget elit eget magna auctor convallis vel nec nisi. Curabitur sit amet finibus diam. Aliquam id orci magna. Fusce id tortor sed massa luctus semper. Etiam a rutrum est. Mauris suscipit consequat nibh, a pellentesque magna dapibus eget. Sed commodo neque at nulla commodo rhoncus. Praesent rutrum felis a mauris molestie sodales.`,


        },

        {
            id: "4",
            imagen: 'https://images.pexels.com/photos/264600/pexels-photo-264600.jpeg',
            titulo: 'News Mock 1',
            url: 'https://example.com/mock1',
            fecha: '2025-01-01',
            categoria: 'sports',
            resumen: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, imperdiet ac augue vel, volutpat suscipit dolor. Aliquam tempus magna et nisi vulputate gravida. Suspendisse efficitur egestas sem vitae vehicula. Pellentesque pulvinar tortor nec nibh fermentum, vitae convallis elit luctus. Curabitur porttitor commodo ultrices. Phasellus nunc ligula, pretium in tellus quis, tempus semper nulla. Nunc eget bibendum augue. Etiam congue, magna at lacinia cursus, tortor eros ultrices ligula, tempus imperdiet orci tortor sit amet velit. Praesent ut purus ac massa venenatis scelerisque.

Sed ultricies mi leo, non rutrum odio lacinia in. Cras ornare arcu vitae dictum viverra. Vivamus ullamcorper libero quis nisl sodales, ut iaculis elit fermentum. Morbi aliquam, augue sit amet tristique porttitor, nibh mauris faucibus nibh, ac dapibus mauris quam vitae tortor. Vivamus mi ligula, fringilla eget eleifend a, rutrum eu augue. Ut eu erat imperdiet, finibus ex id, rhoncus mi. In ultrices justo posuere nulla laoreet rutrum. Vivamus id eros at est vulputate convallis sed quis sapien.

Nulla facilisi. Phasellus ultrices metus at ante auctor, ac tempor ex ornare. Morbi ut augue ornare, eleifend ipsum ut, scelerisque dolor. Proin eleifend sapien nec finibus molestie. Proin luctus nisl nec mi luctus commodo. Fusce eget elit eget magna auctor convallis vel nec nisi. Curabitur sit amet finibus diam. Aliquam id orci magna. Fusce id tortor sed massa luctus semper. Etiam a rutrum est. Mauris suscipit consequat nibh, a pellentesque magna dapibus eget. Sed commodo neque at nulla commodo rhoncus. Praesent rutrum felis a mauris molestie sodales.`,


        },
        {
            id: "5",
            imagen: 'https://images.pexels.com/photos/34174906/pexels-photo-34174906.jpeg',
            titulo: 'News Mock 2',
            url: 'https://example.com/mock2',
            fecha: '2025-01-02',
            categoria: 'politica',
            resumen: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, imperdiet ac augue vel, volutpat suscipit dolor. Aliquam tempus magna et nisi vulputate gravida. Suspendisse efficitur egestas sem vitae vehicula. Pellentesque pulvinar tortor nec nibh fermentum, vitae convallis elit luctus. Curabitur porttitor commodo ultrices. Phasellus nunc ligula, pretium in tellus quis, tempus semper nulla. Nunc eget bibendum augue. Etiam congue, magna at lacinia cursus, tortor eros ultrices ligula, tempus imperdiet orci tortor sit amet velit. Praesent ut purus ac massa venenatis scelerisque.

Sed ultricies mi leo, non rutrum odio lacinia in. Cras ornare arcu vitae dictum viverra. Vivamus ullamcorper libero quis nisl sodales, ut iaculis elit fermentum. Morbi aliquam, augue sit amet tristique porttitor, nibh mauris faucibus nibh, ac dapibus mauris quam vitae tortor. Vivamus mi ligula, fringilla eget eleifend a, rutrum eu augue. Ut eu erat imperdiet, finibus ex id, rhoncus mi. In ultrices justo posuere nulla laoreet rutrum. Vivamus id eros at est vulputate convallis sed quis sapien.

Nulla facilisi. Phasellus ultrices metus at ante auctor, ac tempor ex ornare. Morbi ut augue ornare, eleifend ipsum ut, scelerisque dolor. Proin eleifend sapien nec finibus molestie. Proin luctus nisl nec mi luctus commodo. Fusce eget elit eget magna auctor convallis vel nec nisi. Curabitur sit amet finibus diam. Aliquam id orci magna. Fusce id tortor sed massa luctus semper. Etiam a rutrum est. Mauris suscipit consequat nibh, a pellentesque magna dapibus eget. Sed commodo neque at nulla commodo rhoncus. Praesent rutrum felis a mauris molestie sodales.`,


        },
        {
            id: "6",
            imagen: 'https://images.pexels.com/photos/34342327/pexels-photo-34342327.jpeg',
            titulo: 'News Mock 2',
            url: 'https://example.com/mock2',
            fecha: '2025-01-02',
            categoria: 'lifestyle',
            resumen: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo ligula, imperdiet ac augue vel, volutpat suscipit dolor. Aliquam tempus magna et nisi vulputate gravida. Suspendisse efficitur egestas sem vitae vehicula. Pellentesque pulvinar tortor nec nibh fermentum, vitae convallis elit luctus. Curabitur porttitor commodo ultrices. Phasellus nunc ligula, pretium in tellus quis, tempus semper nulla. Nunc eget bibendum augue. Etiam congue, magna at lacinia cursus, tortor eros ultrices ligula, tempus imperdiet orci tortor sit amet velit. Praesent ut purus ac massa venenatis scelerisque.

Sed ultricies mi leo, non rutrum odio lacinia in. Cras ornare arcu vitae dictum viverra. Vivamus ullamcorper libero quis nisl sodales, ut iaculis elit fermentum. Morbi aliquam, augue sit amet tristique porttitor, nibh mauris faucibus nibh, ac dapibus mauris quam vitae tortor. Vivamus mi ligula, fringilla eget eleifend a, rutrum eu augue. Ut eu erat imperdiet, finibus ex id, rhoncus mi. In ultrices justo posuere nulla laoreet rutrum. Vivamus id eros at est vulputate convallis sed quis sapien.

Nulla facilisi. Phasellus ultrices metus at ante auctor, ac tempor ex ornare. Morbi ut augue ornare, eleifend ipsum ut, scelerisque dolor. Proin eleifend sapien nec finibus molestie. Proin luctus nisl nec mi luctus commodo. Fusce eget elit eget magna auctor convallis vel nec nisi. Curabitur sit amet finibus diam. Aliquam id orci magna. Fusce id tortor sed massa luctus semper. Etiam a rutrum est. Mauris suscipit consequat nibh, a pellentesque magna dapibus eget. Sed commodo neque at nulla commodo rhoncus. Praesent rutrum felis a mauris molestie sodales.`,

        },

    ];


    constructor(private http: HttpClient) { }

    getNews(categoria: string): Observable<News[]> {
        return this.http.get<News[]>(`${this.apiUrl}?categoria=${categoria}`).pipe(
            catchError(err => {
                console.warn(`⚠️ Error al cargar ${categoria}, usando mock`, err);
                return of(this.mockNoticias.filter(n => n.categoria === categoria));
            })
        );
    }
}