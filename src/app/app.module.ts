import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Punto2Component } from './components/punto2/punto2.component';
import { DataComponent } from './components/data/data.component';

import { NgxDataTableModule } from 'angular-9-datatable';
import { CursoComponent } from './components/curso/curso.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Punto5Component } from './components/punto5/punto5.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AsideComponent } from './components/aside/aside.component';
import { NgFallimgModule } from 'ng-fallimg'
import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Punto2Component,
    DataComponent,
    CursoComponent,
    Punto5Component,
    RegistroComponent,
    AsideComponent,

  ],
  imports: [
    BrowserModule,
    NgFallimgModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDataTableModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    SliderModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
