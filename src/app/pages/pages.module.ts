import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { TreeComponent } from './tree/tree.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { SharedModule } from '../components/shared.module';


@NgModule({
  declarations: [EditComponent, TreeComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports:[EditComponent, TreeComponent, ListComponent]
})
export class PagesModule { }
