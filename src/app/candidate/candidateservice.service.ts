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
deleteCandidate(id : any)
{
  return this.http.delete(this.url+"/" + id);
  
}
getCandidateById(id:any)
{
  return this.http.get(this.url+"/"+id);
}
updateCandidate(id:any,data:any)
{
  return this.http.put(this.url+"/"+id,data);
}
}
