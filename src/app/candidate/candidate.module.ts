import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ListComponent, NavbarComponent, AddCandidateComponent, UpdateCandidateComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports : [
    LoginComponent
  ]
})
export class CandidateModule { }
