import { Routes } from '@angular/router';
import HomePage from './shared/home-page/home-page';
import { AboutPage } from './core/pages/about-page/about-page';
import HoroscopoPage from './core/pages/horoscopo-page/horoscopo-page';
import { NewsPage } from './core/pages/news-page/news-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  { path: 'horoscopo', component: HoroscopoPage },
  { path: 'about', component: AboutPage },
  { path: 'news/:id', component: NewsPage },
  { path: '**', redirectTo: '' },
];
