import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl  } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

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
  constructor(private candidate : CandidateserviceService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }

  addCandidate()
  {
    console.log(this.candidateData);
      this.candidate.addCandidateDetails(this.candidateData.value).subscribe(data =>{
        this.alert=true;
        this.candidateData.reset();
        this.router.navigate(['/list']);
      })

      
  }
}
