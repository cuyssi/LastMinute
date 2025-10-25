import { Component } from '@angular/core';
import { Card } from '../../core/components/card/card';
import { Carousel } from '../../core/components/carousel/carousel';
import { Hero } from '../../core/components/hero/hero';

@Component({
  selector: 'app-home-page',
  imports: [Carousel, Card, Hero],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export default class HomePage {
    imagenesCards: string[]=['https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg', 'https://images.pexels.com/photos/34183256/pexels-photo-34183256.jpeg', 'https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg', 'https://images.pexels.com/photos/34183359/pexels-photo-34183359.jpeg', 'https://images.pexels.com/photos/34183273/pexels-photo-34183273.jpeg', 'https://images.pexels.com/photos/34183353/pexels-photo-34183353.jpeg']
    imagenesHero: string[]=['https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg', 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg', 'https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg', 'https://images.pexels.com/photos/264600/pexels-photo-264600.jpeg']
    imagenesAside: string[]=['https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg', 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg', 'https://media.istockphoto.com/id/1477858506/es/foto/noticias-en-l%C3%ADnea-en-tel%C3%A9fono-lectura-de-peri%C3%B3dico-desde-el-sitio-web-maqueta-de-publicaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ixKV0_j45qjB6e2qn13FiobCfqbManMxRQfLGK-BuoQ=', 'https://images.pexels.com/photos/1464196/pexels-photo-1464196.jpeg']
}
