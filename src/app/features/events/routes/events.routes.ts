import { Routes } from '@angular/router';
import { Index } from '../pages/index';
import { Show } from '../pages/show/show';

export const routes: Routes = [
  { path: '', component: Index },
  { path: 'show', component: Show },
  { path: '**', redirectTo: '' },
];
