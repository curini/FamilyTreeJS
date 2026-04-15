import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: EditComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' },
];
