import { Component } from '@angular/core';
import { SharedModule } from '../components/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
  imports: [SharedModule, RouterOutlet],
  standalone: true,
})
export class PagesComponent {}
