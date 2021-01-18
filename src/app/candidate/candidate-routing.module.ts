import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { UpdateCandidateComponent } from "./update-candidate/update-candidate.component";
const routes: Routes = [
  {path:'signup' , component : SignupComponent},
  {path : 'updateCandidate/:id' , component : UpdateCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
