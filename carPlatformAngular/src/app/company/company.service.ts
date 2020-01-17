import { Injectable, Inject } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient, @Inject("apiUrl") private apiUrl) { }

  getAllCompanies(): Observable<HttpResponse<Company[]>> {
    return this.httpClient.get<Company[]>(
      this.apiUrl + "/companies", { observe: 'response' });
  }

  getCompany(companyId:string): Observable<HttpResponse<Company>>{
    return this.httpClient.get<Company>(
      this.apiUrl+"/companies/"+companyId, { observe: 'response' });
  }

  postCompany(data: NgForm): Observable<HttpResponse<Company>> {
    return this.httpClient.post<Company>(this.apiUrl + "/companies", data, { observe: 'response' });
  }
}
