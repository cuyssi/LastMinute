import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { News } from '../../../../services/news';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-news-page',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './news-page.html',
    styleUrls: ['./news-page.css']
})
export class NewsPage {
    news?: News;

    constructor(private router: Router) {
        const state = this.router.getCurrentNavigation()?.extras.state as { news?: News };
        this.news = state?.news;
        console.log('News recibida:', this.news);
    }
}
