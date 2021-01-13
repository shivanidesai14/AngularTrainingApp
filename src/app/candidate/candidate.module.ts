import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    ReactiveFormsModule
  
  ],
  exports : [
    LoginComponent
  ]
})
export class CandidateModule { }
