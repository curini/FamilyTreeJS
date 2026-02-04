import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./features/persons/routes/persons.routes').then((m) => m.routes),
  },
  {
    path: 'events',
    loadChildren: () => import('./features/events/routes/events.routes').then((m) => m.routes),
  },
  {
    path: 'images',
    loadChildren: () => import('./features/images/routes/images.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'pages',
  },
];
