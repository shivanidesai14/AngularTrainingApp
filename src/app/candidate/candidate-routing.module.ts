import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { UpdateCandidateComponent } from "./update-candidate/update-candidate.component";
import { ListComponent } from "./list/list.component";
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  
  {path:'signup' , component : SignupComponent},
  {path : 'updatecandidate/:id' , component : UpdateCandidateComponent},
  {path : 'list' , component:ListComponent},
  {path : 'addcandidate' , component : AddCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
