import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './core/app.component';
import { SharedModule } from './components/shared.module';
import { RouterModule, RouterLink } from '@angular/router';
import { routes } from './app.routes';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // Locale française
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterLink,
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
