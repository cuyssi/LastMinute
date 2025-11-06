import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { News } from '../../interfaces/new-interface';
import { Card } from "../../components/card/card";
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [RouterLink, NgIf, Card],
  templateUrl: './news-page.html',
  styleUrls: ['./news-page.css'],
})
export class NewsPage implements OnInit {
  news?: News;

  private readonly router = inject(Router);

  ngOnInit() {
    const navState = history.state as { news?: News };

    if (navState?.news) {
      this.news = navState.news;
      console.log('Noticia cargada desde el estado:', this.news);
    } else {
      console.warn('No se encontró noticia en el estado');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openNewsUrl(url: string): void {
    if (url) window.open(url, '_blank');
  }
}
