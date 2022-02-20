import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { TusLibrosComponent } from './components/tus-libros/tus-libros.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ListasComponent } from './components/listas/listas.component';
import { CardAltComponent } from './components/card-alt/card-alt.component';

import { ApiRestService } from './services/api-rest.service';

registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    TusLibrosComponent,
    SearchbarComponent,
    LandingComponent,
    AboutUsComponent,
    ListasComponent,
    CardAltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiRestService,
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
