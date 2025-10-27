import { Routes } from '@angular/router';
import HomePage from './shared/home-page/home-page';
import { AboutPage } from './core/pages/about-page/about-page';
import { PortfolioPage } from './core/pages/portfolio-page/portfolio-page';
import { NewsPage } from './core/pages/news-page/news-page/news-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'home', component: HomePage},
    {path: 'portfolio', component: PortfolioPage},
    {path: 'about', component: AboutPage},
    {path: 'news', component: NewsPage},
    {path: '**', redirectTo: ''}
];
