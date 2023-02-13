import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

// esta es la configuracion que angular haria si nosotros le indicamos que nos cree las rutas

const routes: Routes = [
{
  path: '',
  component: PagesComponent,
  children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'grafica1', component: Grafica1Component},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]
},

{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},

{path: '**', component: NopagefoundComponent},  // cualquier ruta que no este definida arriba
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],   // forRoot es para rutas principales
  exports: [RouterModule]
})
export class AppRoutingModule { }
