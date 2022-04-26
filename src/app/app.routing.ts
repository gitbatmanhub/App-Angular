
// Importar los modulos de rutas
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
//importar los componentes
import {HomeComponent} from "./home/home.component";
import {ZapatillasComponent} from "./zapatillas/zapatillas.component";
import {VideojuegoComponent} from "./videojuego/videojuego.component";
import {CursosComponent} from "./cursos/cursos.component";
import {ExternoComponent} from "./externo/externo.component"


//Array de configuración de las rutas
const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'externo', component: ExternoComponent},
  {path: '**', component: HomeComponent}

];

//Exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot( appRoutes );

