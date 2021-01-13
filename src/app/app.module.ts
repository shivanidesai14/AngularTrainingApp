import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateModule } from "./candidate/candidate.module";
import { CandidateRoutingModule } from "./candidate/candidate-routing.module";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CandidateRoutingModule,
    CandidateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
