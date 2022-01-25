import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { TusLibrosComponent } from './components/tus-libros/tus-libros.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { ApiRestService } from './services/api-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    TusLibrosComponent,
    SearchbarComponent,
    LandingComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
