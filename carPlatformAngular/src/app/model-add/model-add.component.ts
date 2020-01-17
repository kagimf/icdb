import { Component, OnInit } from '@angular/core';
import { Brand } from '../brand/brand';
import { BrandService } from '../brand/brand.service';
import { ModelService } from '../model/model.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Model } from '../model/model';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {

  companies: Company[];

  brands: Brand[];

  companyModel: Company = new Company(-1, "", "");

  brandModel: Brand = new Brand(-1, -1, "", "");

  modelModel: Model = new Model(-1, -1, "", "", -1, "", null, -1, -1, "");

  constructor(private companyService: CompanyService, private brandService: BrandService, private modelService: ModelService, private router: Router) { }

  ngOnInit() {

    this.getAllCompanies()

  }

  getAllCompanies() {
    this.companyService.getAllCompanies()
      .subscribe(p => this.companies = p.body);
  }

  getAllBrands(companyId: string) {
    this.brandService.getAllBrands(companyId)
      .subscribe(p => this.brands = p.body);
  }

  onCompanyChange(event) {
    this.getAllBrands(event);
  }

  checkout(form: NgForm) {
    this.modelService.postModel(form).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(["modification/add"]);
  }

}
