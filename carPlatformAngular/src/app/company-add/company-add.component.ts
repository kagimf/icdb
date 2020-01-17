import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  companies:Company[];

  model:Company = new Company(-1, "", "");

  constructor(private companyService:CompanyService, private router:Router) { }

  ngOnInit() {
  }
  
  checkout(form:NgForm){
    if(form.invalid){
      return;
    }
    this.companyService.postCompany(form.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    console.log(form.value);
    this.router.navigate(["modification/add"]);
  }
}
