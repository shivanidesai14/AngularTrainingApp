import { Component, OnInit } from '@angular/core';
import { CandidateserviceService } from "../candidateservice.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
data:any = {};
searchText : any
page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 15, 20];
  filterTerm: any;
  errormessage : any;
  constructor(private candidate : CandidateserviceService) {

    this.onfetchData();
     
   }
onfetchData()
{
  this.errormessage="";
  this.candidate.getCandidate().subscribe( (data) =>{
    this.data = data;
    
  },(error)=>{
    this.errormessage = error;
    console.error('error caught in component')
  })
}
onTableDataChange(event : any){
  console.log(event);
  this.page = event;
  this.onfetchData();
}  

onTableSizeChange(event : any): void {

  this.tableSize = event.target.value;
  this.page = 1;
  this.onfetchData();
}  
  onDelete(id : any)
  {
    this.errormessage=""
      this.candidate.deleteCandidate(id).subscribe((data)=>{
      this.onfetchData();
        console.log('Delete successful')
      },(error)=>{
        this.errormessage = error;
        console.error('error caught in component');
      })
  }
  ngOnInit(): void {
   
  }

  
}
