import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { CursoComponent } from './components/curso/curso.component';
import { DataComponent } from './components/data/data.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AsideComponent } from './components/aside/aside.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'punto2', component: Punto2Component },
  { path: 'dataTable', component: DataComponent },
  { path: 'data', component: DataComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'punto5', component: Punto5Component },
  { path: 'registro', component: RegistroComponent },
  { path: 'aside', component: AsideComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
