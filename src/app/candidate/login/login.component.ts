import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl  } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert = false;
  data : any = {};
  candidateData = new FormGroup({
   
    email : new FormControl(''),
    password: new FormControl('')
  
  })
  constructor(private candidate : CandidateserviceService) { }

  ngOnInit(): void {
  }
  loginCandidate()
  {
    console.log("data",this.candidateData.value.email);
    // this.candidate.getCandidate().subscribe(data=>{
    //   this.data=data;
    //   const data = data.find()
    //   if(this.candidateData.value.email == this.data.email && this.candidateData.value.password== this.data.password)
    //   {
    //     console.log("login successful");
    //   }
    // })
  }
}
