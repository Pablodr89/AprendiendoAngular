import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { ZapatillasComponent } from "./components/zapatillas/zapatillas.component";
import { GameComponent } from "./components/game/game.component";
import { CursosComponent } from "./components/cursos/cursos.component";
import { ExternoComponent } from "./components/externo/externo.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'games', component: GameComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
