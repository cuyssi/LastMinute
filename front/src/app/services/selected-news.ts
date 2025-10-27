import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({ providedIn: 'root' })
export class SelectedNewsService {
  private news?: News;

  setNews(news: News) {
    this.news = news;
  }

  getNews(): News | undefined {
    return this.news;
  }
}
