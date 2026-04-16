import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [authGuard],
    component: PagesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: 'create', component: EditComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' },
];
