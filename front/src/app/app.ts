import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';
import { Aside } from './shared/components/aside/aside';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Aside],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lastMinute');
}
