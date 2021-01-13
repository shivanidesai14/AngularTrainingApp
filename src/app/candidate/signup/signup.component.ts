import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl  } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert = false;
  candidateData = new FormGroup({
    username : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
    number : new FormControl(''),
    useraddress : new FormControl('')
  })
  constructor(private candidate : CandidateserviceService) { }

  ngOnInit(): void {
  }

  addCandidate()
  {
    console.log(this.candidateData);
      this.candidate.addCandidateDetails(this.candidateData.value).subscribe(data =>{
        this.alert=true;
        this.candidateData.reset();
      })

      
  }
}
