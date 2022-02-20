import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LandingComponent } from './components/landing/landing.component';
import { TusLibrosComponent } from './components/tus-libros/tus-libros.component';
import { ListasComponent } from './components/listas/listas.component';

const routes: Routes = [
  {path: '', component: LandingComponent, /* pathMatch: 'full' */},
  {path: 'sobre-nosotros', component: AboutUsComponent},
  {path: 'listas', component: ListasComponent},
  {path: 'mis-libros', component: TusLibrosComponent},
  {path: '**', redirectTo: '/'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }