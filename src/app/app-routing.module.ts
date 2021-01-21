
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./candidate/login/login.component";


const routes: Routes = [  

  {path : '' , component : LoginComponent},
//{path: 'candidate',loadChildren :()=> import('./candidate/candidate.module').then(load => load.CandidateModule) },
  


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
