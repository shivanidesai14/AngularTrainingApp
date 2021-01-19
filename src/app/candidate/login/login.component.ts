import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl,Validators  } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert = false;
  submitted = false;
  data : any = {};
  candidateData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)])
  
  })
  constructor(private candidate : CandidateserviceService) { }

  ngOnInit(): void {
  }
  get registerFormControl() {
    return this.candidateData.controls;
  }
  loginCandidate()
  {
    this.submitted = true;
    if (this.candidateData.valid) {
    console.log("data",this.candidateData.value.email);
    this.candidate.getCandidate().subscribe(data=>{
      this.data=data;
     console.log(this.data);
    
      // if(this.candidateData.value.email == this.data.email && this.candidateData.value.password== this.data.password)
      // {
      //   console.log("login sucsssssfcessful");
      // }
    })
  }
  }
}
