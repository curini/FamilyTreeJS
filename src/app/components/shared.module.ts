import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramComponent } from './diagram/diagram.component';
import { FamiliesComponent } from './families/families.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [DiagramComponent, FamiliesComponent, NavbarComponent],
  imports: [CommonModule, RouterLink],
  exports: [DiagramComponent, FamiliesComponent, NavbarComponent],
})
export class SharedModule {}
