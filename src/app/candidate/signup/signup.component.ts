import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl, Validators  } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert = false;
  submitted = false;

  candidateData = new FormGroup({
    username: new FormControl('', [Validators.required]),
    useraddress: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)])
  })
  constructor(private candidate : CandidateserviceService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }
 get registerFormControl() {
    return this.candidateData.controls;
  }

  addCandidate()
  {
    this.submitted = true;
    if (this.candidateData.valid) {
      this.candidate.addCandidateDetails(this.candidateData.value).subscribe(data =>{
        this.alert=true;
        this.candidateData.reset();
        this.router.navigate(['/list']);
      })
    }
      
  }
}
