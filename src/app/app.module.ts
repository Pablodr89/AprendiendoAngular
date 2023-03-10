import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';//Añadir para el routing
import { HttpClientModule } from '@angular/common/http'//Añadir para peticiones AJAX a API
import { ReactiveFormsModule } from '@angular/forms';//Añadir para validaciones de formularios

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { ExternoComponent } from './components/externo/externo.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,//Añade el nuevo componente al modulo
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
