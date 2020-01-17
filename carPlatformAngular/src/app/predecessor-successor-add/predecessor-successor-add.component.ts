import { Component, OnInit } from '@angular/core';
import { PredecessorSuccessorService } from '../predecessor-successor/predecessor-successor.service';
import { CompanyService } from '../company/company.service';
import { BrandService } from '../brand/brand.service';
import { ModelService } from '../model/model.service';
import { ModificationService } from '../modification/modification.service';
import { Company } from '../company/company';
import { Brand } from '../brand/brand';
import { Model } from '../model/model';
import { Modification } from '../modification/modification';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { PredecessorSuccessor } from '../predecessor-successor/predecessor-successor';

@Component({
  selector: 'app-predecessor-successor-add',
  templateUrl: './predecessor-successor-add.component.html',
  styleUrls: ['./predecessor-successor-add.component.css']
})
export class PredecessorSuccessorAddComponent implements OnInit {

  companies: Company[];

  brands: Brand[];

  unsortedPredecessorModels: Model[];

  predecessorModels: Model[];

  unsortedSuccessorModels: Model[];

  successorModels: Model[];

  companyModel: Company = new Company(-1, "", "");

  brandModel: Brand = new Brand(-1, -1, "", "");

  predecessorModelModel: Model = new Model(-1, -1, "", "", -1, "", null, -1, -1, "");

  successorModelModel: Model = new Model(-1, -1, "", "", -1, "", null, -1, -1, "");

  predecessorSuccessorModel: PredecessorSuccessor = new PredecessorSuccessor(-1, -1, -1);

  constructor(private predecessorSuccessorService: PredecessorSuccessorService, private companyService: CompanyService, private brandService: BrandService, private modelService: ModelService, private router: Router) { }

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

  getAllModels(type: string, brandId: string) {
    if (type === "P") {
      this.modelService.getAllModels(brandId)
    .subscribe(p => {
      this.unsortedPredecessorModels = p.body;
      this.predecessorModels = this.unsortedPredecessorModels.sort((obj1, obj2) => {
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
      for (var index in this.predecessorModels) {
        this.predecessorModels[index].codeNameorGeneration="";
        if(this.predecessorModels[index].isFacelifted){
          if(this.predecessorModels[index].codeName){
            this.predecessorModels[index].codeNameorGeneration += "("+this.predecessorModels[index].codeName+" Facelift) ";
          }
          if(this.predecessorModels[index].generation!=0){
            if(this.predecessorModels[index].generation==1){
              this.predecessorModels[index].codeNameorGeneration += "(1st Generation)";
            }else if(this.predecessorModels[index].generation==2){
              this.predecessorModels[index].codeNameorGeneration += "(2nd Generation)";
            }else if(this.predecessorModels[index].generation==3){
              this.predecessorModels[index].codeNameorGeneration += "(3rd Generation)";
            }else{
              this.predecessorModels[index].codeNameorGeneration += "("+this.predecessorModels[index].generation+"th Generation)"
            }
          }
          if(!this.predecessorModels[index].codeName&&this.predecessorModels[index].generation==0){
            this.predecessorModels[index].codeNameorGeneration="(Facelift)"
          }
        }else {
          if(this.predecessorModels[index].codeName){
            this.predecessorModels[index].codeNameorGeneration += "("+this.predecessorModels[index].codeName+") ";
          }
          if(this.predecessorModels[index].generation!=0){
            if(this.predecessorModels[index].generation==1){
              this.predecessorModels[index].codeNameorGeneration += "(1st Generation)";
            }else if(this.predecessorModels[index].generation==2){
              this.predecessorModels[index].codeNameorGeneration += "(2nd Generation)";
            }else if(this.predecessorModels[index].generation==3){
              this.predecessorModels[index].codeNameorGeneration += "(3rd Generation)";
            }else{
              this.predecessorModels[index].codeNameorGeneration += "("+this.predecessorModels[index].generation+"th Generation)"
            }
          }
        }
      }
    });
    }else if (type === "S") {
      this.modelService.getAllModels(brandId)
    .subscribe(p => {
      this.unsortedSuccessorModels = p.body;
      this.successorModels = this.unsortedSuccessorModels.sort((obj1, obj2) => {
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
      for (var index in this.successorModels) {
        this.successorModels[index].codeNameorGeneration="";
        if(this.successorModels[index].isFacelifted){
          if(this.successorModels[index].codeName){
            this.successorModels[index].codeNameorGeneration += "("+this.successorModels[index].codeName+" Facelift) ";
          }
          if(this.successorModels[index].generation!=0){
            if(this.successorModels[index].generation==1){
              this.successorModels[index].codeNameorGeneration += "(1st Generation)";
            }else if(this.successorModels[index].generation==2){
              this.successorModels[index].codeNameorGeneration += "(2nd Generation)";
            }else if(this.successorModels[index].generation==3){
              this.successorModels[index].codeNameorGeneration += "(3rd Generation)";
            }else{
              this.successorModels[index].codeNameorGeneration += "("+this.successorModels[index].generation+"th Generation)"
            }
          }
          if(!this.successorModels[index].codeName&&this.successorModels[index].generation==0){
            this.successorModels[index].codeNameorGeneration="(Facelift)"
          }
        }else {
          if(this.successorModels[index].codeName){
            this.successorModels[index].codeNameorGeneration += "("+this.successorModels[index].codeName+") ";
          }
          if(this.successorModels[index].generation!=0){
            if(this.successorModels[index].generation==1){
              this.successorModels[index].codeNameorGeneration += "(1st Generation)";
            }else if(this.successorModels[index].generation==2){
              this.successorModels[index].codeNameorGeneration += "(2nd Generation)";
            }else if(this.successorModels[index].generation==3){
              this.successorModels[index].codeNameorGeneration += "(3rd Generation)";
            }else{
              this.successorModels[index].codeNameorGeneration += "("+this.successorModels[index].generation+"th Generation)"
            }
          }
        }
      }
    });
    }
  }

  checkout(form: NgForm) {
    this.predecessorSuccessorService.postSuccessorPredecessor(form).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(["model"]);
  }

  onCompanyChange(event) {
    this.getAllBrands(event);
  }

  onBrandChange(event) {
    this.getAllModels("P", event);
    this.getAllModels("S", event);
  }

}
