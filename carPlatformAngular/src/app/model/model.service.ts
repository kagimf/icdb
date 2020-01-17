import { Injectable, Inject } from '@angular/core';
import { Model } from './model'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private httpClient: HttpClient, @Inject("apiUrl") private apiUrl) { }

  getAllModels(brandId?:string): Observable<HttpResponse<Model[]>> {
    if(brandId){
      return this.httpClient.get<Model[]>(
        this.apiUrl + "/brands/"+brandId+"/models", { observe: 'response' });
    }else{
      return this.httpClient.get<Model[]>(
        this.apiUrl + "/models", { observe: 'response' });
    }  
  }

  getModel(modelId:string): Observable<HttpResponse<Model>>{
    return this.httpClient.get<Model>(
      this.apiUrl + "/models/"+modelId, { observe: 'response' });
  }

  postModel(data:NgForm): Observable<HttpResponse<Model>>{
    console.log(data.value);
    return this.httpClient.post<Model>(this.apiUrl+"/brands/"+data.form.get("brandId").value+"/models", data.value, { observe: 'response' });
  }

  putModel(data: NgForm, brandId:string, modelId:string): Observable<HttpResponse<Model>>{
    return this.httpClient.put<Model>(this.apiUrl + "/brands/" + brandId + "/models/" + modelId, data.value, { observe: 'response' });
  }

}
