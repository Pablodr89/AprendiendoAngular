//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar los componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { GameComponent } from "./game/game.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";

//Array de rutas
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'games', component: GameComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: '**', component: HomeComponent}
]

//Exportar el modulo del routing
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
