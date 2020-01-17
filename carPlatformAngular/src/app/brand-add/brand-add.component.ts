import { Component, OnInit } from '@angular/core';
import {BrandService} from '../brand/brand.service';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import { Brand } from '../brand/brand';


@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  companies:Company[];

  companyModel:Company = new Company(-1, "", "");
  
  brandModel:Brand = new Brand(-1, -1, "", "");

  constructor(private brandService:BrandService, private companyService:CompanyService, private router:Router) { }

  ngOnInit() {
    this.getAllCompanies()
  }

  getAllCompanies(){
    this.companyService.getAllCompanies()
      .subscribe(p => this.companies = p.body);
  }

  checkout(form:NgForm){
    if(form.invalid){
      return;
    }
    this.brandService.postBrand(form).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(["modification/add"]);
  }

}
