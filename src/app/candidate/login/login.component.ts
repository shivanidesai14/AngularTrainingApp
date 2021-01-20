import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl,Validators  } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  constructor(private candidate : CandidateserviceService, private router: Router) { }
value : any
flag:any = true;
  ngOnInit(): void {
  }
  get registerFormControl() {
    return this.candidateData.controls;
  }
  loginCandidate()
  {
    this.submitted = true;
    if (this.candidateData.valid) {
  
    this.candidate.getCandidate().subscribe(data=>{
     this.data=data;

     for(let item of this.data)
     {
       if(item.email== this.candidateData.value.email && item.password == this.candidateData.value.password)
       {
            console.log("Logged in successfully");
            this.flag=false;
            localStorage.setItem("email",item.email);
            this.router.navigate(['/list']);
            break;
            
       }
      
     }
     if(this.flag==true)
     {
       console.log("incooreect id & password")
     }


    })
  }
  }
}
