import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {
  id: any;
  alert = false;
  values = '';
  submitted = false;
  data: any = {};
  errormessage : any;
erormessage= "";

  updateCandidate = new FormGroup({
    username: new FormControl('', [Validators.required]),
    useraddress: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)])
  })
  constructor(private actRoute: ActivatedRoute, private candidate: CandidateserviceService) {
    this.id = this.actRoute.snapshot.params.id;
    this.candidate.getCandidateById(this.id).subscribe(data => {
      this.data = data;
      this.updateCandidate.setValue(this.data);

    })

  }
  get registerFormControl() {
    return this.updateCandidate.controls;
  }


  ngOnInit(): void {
    console.log("data", this.data);

  }
  collectCandidate() {
    this.erormessage="";
    this.submitted = true;
    if (this.updateCandidate.valid) {
      this.candidate.updateCandidate(this.actRoute.snapshot.params.id, this.updateCandidate.value).subscribe((data) => {
        console.log("updated successfully");
        this.alert = true;
      
      },(error)=>{
        this.errormessage=error;
        console.error("error found in update component");
      })
    }
  }

}
