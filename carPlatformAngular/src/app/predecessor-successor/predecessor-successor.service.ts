import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PredecessorSuccessor } from './predecessor-successor';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PredecessorSuccessorService {

  constructor(private httpClient: HttpClient, @Inject("apiUrl") private apiUrl) { }

  getPredecessorsofSuccessor(successorId:string): Observable<HttpResponse<PredecessorSuccessor[]>>{
    return this.httpClient.get<PredecessorSuccessor[]>(
      this.apiUrl + "/predecessors/"+successorId, { observe: 'response' });
  }

  getSuccessorsofPredecessor(predecessorId:string): Observable<HttpResponse<PredecessorSuccessor[]>>{
    return this.httpClient.get<PredecessorSuccessor[]>(
      this.apiUrl + "/successors/"+predecessorId, { observe: 'response' });
  }

  postSuccessorPredecessor(data:NgForm): Observable<HttpResponse<PredecessorSuccessor>>{
    console.log(data.value);
    return this.httpClient.post<PredecessorSuccessor>(this.apiUrl+"/predecessor-successor/", data.value, { observe: 'response' });
  }

}
