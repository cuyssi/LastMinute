import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeController } from '../../../core/components/theme-controller/theme-controller';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ThemeController],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    
}
