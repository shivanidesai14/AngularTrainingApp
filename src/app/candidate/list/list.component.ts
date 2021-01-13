import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
data:any = {};
  constructor(private candidate : CandidateserviceService) {

      this.candidate.getCandidate().subscribe(data=>{
        this.data = data;
      })
   }

  ngOnInit(): void {
  }

  
}
