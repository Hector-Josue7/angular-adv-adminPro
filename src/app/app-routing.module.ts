import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


// esta es la configuracion que angular haria si nosotros le indicamos que nos cree las rutas

const routes: Routes = [

  //path: '/dashboard' PagesRouting
  //path: '/auth' AuthRouting
  //path: '/medicos' MedicosRouting
  //path: '/compras' ComprasRouting
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: '**', component: NopagefoundComponent},  // cualquier ruta que no este definida arriba

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
   PagesRoutingModule,
   AuthRoutingModule
  ],   // forRoot es para rutas principales

  exports: [RouterModule]
})
export class AppRoutingModule { }
