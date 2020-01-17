import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import {Brand} from '../brand/brand';
import {BrandService} from '../brand/brand.service';
import { NgForm } from '@angular/forms';
import {Model} from '../model/model';
import {ModelService} from '../model/model.service';
import { ModificationService } from '../modification/modification.service';
import {Router} from "@angular/router";
import { Modification } from '../modification/modification';


@Component({
  selector: 'app-modification-add',
  templateUrl: './modification-add.component.html',
  styleUrls: ['./modification-add.component.css']
})
export class ModificationAddComponent implements OnInit {

  companies:Company[];

  brands:Brand[];

  unsortedModels: Model[];

  models:Model[];

  companyModel:Company = new Company(-1, "", "");
  
  brandModel:Brand = new Brand(-1, -1, "", "");

  modelModel:Model = new Model(-1, -1, "", "", -1, "", null, -1, -1, "");

  modificationModel:Modification = new Modification(-1, -1, "", -1, -1, "", "", "", -1, -1, -1, -1, -1, -1, "", "", -1, "", "", "", "", -1, -1, -1, -1, -1, "", -1, "", -1, "", "");

  constructor(private companyService:CompanyService, private brandService:BrandService, private modelService:ModelService, private modificationService:ModificationService, private router:Router) { }

  ngOnInit() {
    this.getAllCompanies()
  }

  getAllCompanies(){
    this.companyService.getAllCompanies()
      .subscribe(p => this.companies = p.body);
  }

  getAllBrands(companyId:string) {
    this.brandService.getAllBrands(companyId)
      .subscribe(p => this.brands = p.body);
  }
  
  getAllModels(brandId:string) {
    this.modelService.getAllModels(brandId)
    .subscribe(p => {
      this.unsortedModels = p.body;
      this.models = this.unsortedModels.sort((obj1, obj2) => {
        if(obj1.modelName === obj2.modelName){
          if(obj1.codeName!=null){
            if(obj1.codeName > obj2.codeName){
              return 1;
            }else if(obj1.codeName < obj2.codeName){
              return -1;
            }
          }else if(obj1.generation!=0){
            if(obj1.generation > obj2.generation){
              return 1;
            }else if(obj1.generation < obj2.generation){
              return -1;
            }
          }
        }
        return 0;
      });
      for (var index in this.models) {
        this.models[index].codeNameorGeneration="";
        if(this.models[index].isFacelifted){
          if(this.models[index].codeName){
            this.models[index].codeNameorGeneration += "("+this.models[index].codeName+" Facelift) ";
          }
          if(this.models[index].generation!=0){
            if(this.models[index].generation==1){
              this.models[index].codeNameorGeneration += "(1st Generation)";
            }else if(this.models[index].generation==2){
              this.models[index].codeNameorGeneration += "(2nd Generation)";
            }else if(this.models[index].generation==3){
              this.models[index].codeNameorGeneration += "(3rd Generation)";
            }else{
              this.models[index].codeNameorGeneration += "("+this.models[index].generation+"th Generation)"
            }
          }
          if(!this.models[index].codeName&&this.models[index].generation==0){
            this.models[index].codeNameorGeneration="(Facelift)"
          }
        }else {
          if(this.models[index].codeName){
            this.models[index].codeNameorGeneration += "("+this.models[index].codeName+") ";
          }
          if(this.models[index].generation!=0){
            if(this.models[index].generation==1){
              this.models[index].codeNameorGeneration += "(1st Generation)";
            }else if(this.models[index].generation==2){
              this.models[index].codeNameorGeneration += "(2nd Generation)";
            }else if(this.models[index].generation==3){
              this.models[index].codeNameorGeneration += "(3rd Generation)";
            }else{
              this.models[index].codeNameorGeneration += "("+this.models[index].generation+"th Generation)"
            }
          }
        }
      }
    });
  }

  checkout(form:NgForm){
    this.modificationService.postModification(form).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(["model"]);
  }

  onCompanyChange(event){
    this.getAllBrands(event);
  }

  onBrandChange(event){
    this.getAllModels(event);
  }

}
