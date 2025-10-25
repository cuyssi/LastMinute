import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-controller',
  imports: [],  
  standalone: true,
  templateUrl: './theme-controller.html',
  styleUrl: './theme-controller.css',
})
export class ThemeController {
    isDark = true;

  toggleTheme() {
    this.isDark = !this.isDark;
    const theme = this.isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
