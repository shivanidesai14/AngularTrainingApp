import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidateserviceService {
  
url= "http://localhost:3000/signupCandidate";

  constructor(private http:HttpClient) { }
  
addCandidateDetails(data : any)
{
  
  return this.http.post(this.url,data);
}
getCandidate()
{
    return this.http.get(this.url);
}
}
