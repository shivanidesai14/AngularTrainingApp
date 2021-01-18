import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl  } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {
id:any;
alert = false;
values = '';
data : any ={};

updateCandidate = new FormGroup({
  username : new FormControl(''),
  useraddress : new FormControl(''),
  email : new FormControl(''),
  number : new FormControl(''),
  password : new FormControl(''),

})
  constructor(private actRoute: ActivatedRoute,private candidate:CandidateserviceService) { 
    this.id= this.actRoute.snapshot.params.id;
    this.candidate.getCandidateById(this.id).subscribe(data=>{
      this.data=data;
     this.updateCandidate.setValue(this.data);

    })
    
  }

 
  ngOnInit(): void {
    console.log("data",this.data);
    
  }
  collectCandidate()
  {
    this.candidate.updateCandidate(this.actRoute.snapshot.params.id,this.updateCandidate.value).subscribe(data=>{
      console.log("updated successfully");
      this.alert=true;
      this.updateCandidate.reset();
    })
  }

}
