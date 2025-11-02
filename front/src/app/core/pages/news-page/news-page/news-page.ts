import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot, RouterLink } from '@angular/router';

import { NgIf } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { News } from '../../../interfaces/new-interface';

@Component({
    selector: 'app-news-page',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './news-page.html',
    styleUrls: ['./news-page.css']
})
export class NewsPage implements OnDestroy {
    news?: News;
    private sub?: Subscription;

    constructor(private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = (
            future: ActivatedRouteSnapshot,
            curr: ActivatedRouteSnapshot
        ) => {
            const futurePath = future.routeConfig?.path;
            const currPath = curr.routeConfig?.path;
            if (futurePath === 'news' && currPath === 'news') return false;
            return futurePath === currPath;
        };

        this.loadState();

        this.sub = this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe(() => this.loadState());
    }

    private loadState() {
        const navState = this.router.getCurrentNavigation()?.extras.state as { news?: News } | undefined;
        if (navState?.news) {
            this.news = navState.news;
            console.log('News actualizada:', this.news);
        }
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
