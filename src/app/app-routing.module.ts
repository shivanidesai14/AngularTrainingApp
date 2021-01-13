import { ConstantPool } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./candidate/login/login.component";
import { SignupComponent } from "./candidate/signup/signup.component";
import { ListComponent } from './candidate/list/list.component';
const routes: Routes = [

  {path : 'login' , component:LoginComponent},
  {path : '' , redirectTo : '/login' , pathMatch : 'full'},
 {path : 'signup' , component : SignupComponent},
 {path : 'list' , component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
