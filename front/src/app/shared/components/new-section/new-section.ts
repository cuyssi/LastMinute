import { Component, input } from '@angular/core';
import { News } from '../../../core/interfaces/new-interface';
import { NoNews } from '../no-news/no-news';
import { Hero } from '../../../core/components/hero/hero';
import { RouterLink } from '@angular/router';
import { Skeleton } from '../skeleton/skeleton.';
import { Card } from '../../../core/components/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-section',
  imports: [RouterLink, CommonModule, NoNews, Hero, Skeleton, Card],
  templateUrl: './new-section.html',
  styleUrl: './new-section.css',
})
export class NewSection {
  loading = input.required<boolean>();

  noticias = input.required<News[]>();

  titulo = input.required<string>();

  arraySkeleton = input<number>(4);

  tipo = input<'hero' | 'card'>('hero');

  readonly Array = Array;
}
