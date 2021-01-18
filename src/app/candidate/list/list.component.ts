import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
import { FormGroup,FormControl  } from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
data:any = {};
searchText : any
  constructor(private candidate : CandidateserviceService) {

      this.candidate.getCandidate().subscribe(data=>{
        this.data = data;
      })
   }

  onDelete(id : any)
  {
      this.candidate.deleteCandidate(id).subscribe(data=>{
        this.candidate.getCandidate().subscribe(data=>{
          this.data = data;
        })
        
      })
  }
  ngOnInit(): void {
  }

  
}
