import { Injectable, Inject } from '@angular/core';
import { Modification } from './modification'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor(private httpClient: HttpClient, @Inject("apiUrl") private apiUrl) { }

  getAllModifications(modelId?: string): Observable<HttpResponse<Modification[]>> {
    if (modelId) {
      return this.httpClient.get<Modification[]>(
        this.apiUrl + "/models/" + modelId + "/modifications", { observe: 'response' });
    } else {
      return this.httpClient.get<Modification[]>(
        this.apiUrl + "/modifications", { observe: 'response' });
    }
  }

  getModification(modificationId: string): Observable<HttpResponse<Modification>> {
    return this.httpClient.get<Modification>(
      this.apiUrl + "/modifications/" + modificationId, { observe: 'response' });
  }

  postModification(data: NgForm): Observable<HttpResponse<Modification>> {
    return this.httpClient.post<Modification>(this.apiUrl + "/models/" + data.form.get("modelId").value + "/modifications", data.value, { observe: 'response' });
  }

  putModification(data: NgForm, modelId:string, modificationId:string): Observable<HttpResponse<Modification>>{
    console.log(data.value);
    return this.httpClient.put<Modification>(this.apiUrl + "/models/" + modelId + "/modifications/" + modificationId, data.value, { observe: 'response' });
  }

}
