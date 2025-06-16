import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: EditComponent },
  { path: '**', redirectTo: '' },
];
