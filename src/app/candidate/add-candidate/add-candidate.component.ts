import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators  } from "@angular/forms";
import { CandidateserviceService } from "../candidateservice.service";


@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  alert = false;
  values = '';
  submitted = false;

  constructor(private candidate:CandidateserviceService) {
   
   }

  addCandidate = new FormGroup({
    username : new FormControl('',[Validators.required]),
    useraddress : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    number : new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
    password : new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)])
  
  })


  get registerFormControl() {
    return this.addCandidate.controls;
  }

  
  ngOnInit(): void {
  }
  collectCandidate()
  {
    this.submitted = true;
    if (this.addCandidate.valid) {
      this.candidate.addCandidateDetails(this.addCandidate.value).subscribe(data =>{
        console.warn("candidate added successfully");
        this.alert=true;
        this.addCandidate.reset();
       })
    }
   
  }
  
}
