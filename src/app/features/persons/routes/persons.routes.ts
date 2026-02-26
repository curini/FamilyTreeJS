import { Routes } from '@angular/router';
import { Stats } from '../pages/stats/stats';
import { Index } from '../pages/index/index';
import { Show } from '../pages/show/show';
import { Tree } from '../pages/tree/tree';

export const routes: Routes = [
  { path: '', component: Stats },
  { path: 'index', component: Index },
  { path: 'show/:id', component: Show },
  { path: 'tree', component: Tree },
  { path: '**', redirectTo: '' },
];
