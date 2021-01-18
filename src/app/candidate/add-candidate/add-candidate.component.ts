import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl  } from "@angular/forms";
import { CandidateserviceService } from "../candidateservice.service";


@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  alert = false;
  values = '';

  constructor(private candidate:CandidateserviceService) {
   
   }

  addCandidate = new FormGroup({
    username : new FormControl(''),
    useraddress : new FormControl(''),
    email : new FormControl(''),
    number : new FormControl(''),
    password : new FormControl(''),
  
  })
  
  ngOnInit(): void {
  }
  collectCandidate()
  {
    this.candidate.addCandidateDetails(this.addCandidate.value).subscribe(data =>{
     console.warn("candidate added successfully");
     this.alert=true;
     this.addCandidate.reset();
    })
  }
}
