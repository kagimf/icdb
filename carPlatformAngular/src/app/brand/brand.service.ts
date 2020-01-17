import { Injectable, Inject } from '@angular/core';
import { Brand } from './brand'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient, @Inject("apiUrl") private apiUrl) { }

  getAllBrands(companyId?:string): Observable<HttpResponse<Brand[]>> {
    if(companyId){
      return this.httpClient.get<Brand[]>(
        this.apiUrl+"/companies/"+companyId+"/brands", { observe: 'response' });
    }else{
      return this.httpClient.get<Brand[]>(
        this.apiUrl+"/brands", { observe: 'response' });
    }
  }

  getBrand(brandId:string): Observable<HttpResponse<Brand>>{
    return this.httpClient.get<Brand>(
      this.apiUrl+"/brands/"+brandId, { observe: 'response' });
  }

  postBrand(data:NgForm): Observable<HttpResponse<Brand>>{
    console.log(data.value);
    return this.httpClient.post<Brand>(this.apiUrl+"/companies/"+data.form.get("companyId").value+"/brands", data.value, { observe: 'response' });
  }

}
