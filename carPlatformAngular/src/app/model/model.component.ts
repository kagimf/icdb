import { Component, OnInit } from '@angular/core';
import { ModelService } from './model.service';
import { Model } from './model';
import { ActivatedRoute } from '@angular/router';
import { Pager } from '../app-pager';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  models: Model[];
  unsortedModels: Model[];
  pager: Pager = new Pager();
  constructor(private activatedRoute: ActivatedRoute, private modelService: ModelService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => { this.getAllModels(params["brandId"]) })

  }
  getAllModels(brandId: string) {
    this.modelService.getAllModels(brandId).subscribe(p => {
      this.unsortedModels = p.body;
      this.models = this.unsortedModels.sort((obj1, obj2) => {
        if (obj1.modelName === obj2.modelName) {
          if (obj1.generation != 0) {
            if (obj1.generation > obj2.generation) {
              return 1;
            } else if (obj1.generation < obj2.generation) {
              return -1;
            } else {
              if (obj1.isFacelifted) {
                return 1;
              } else if (obj2.isFacelifted) {
                return -1;
              }
            }
          } else if (obj1.codeName != null) {
            if (obj1.codeName > obj2.codeName) {
              return 1;
            } else if (obj1.codeName < obj2.codeName) {
              return -1;
            } else {
              if (obj1.isFacelifted) {
                return 1;
              } else if (obj2.isFacelifted) {
                return -1;
              }
            }
          }
        }
        if (obj1.brand.brandName > obj2.brand.brandName) {
          return 1;
        } else if (obj1.brand.brandName < obj2.brand.brandName) {
          return -1;
        }
        return 0;
      });
      for (var index in this.models) {
        this.models[index].codeNameorGeneration = "";
        if (this.models[index].isFacelifted) {
          if (this.models[index].codeName) {
            this.models[index].codeNameorGeneration += "(" + this.models[index].codeName + " Facelift) ";
          }
          if (this.models[index].generation != 0) {
            if (this.models[index].generation == 1) {
              this.models[index].codeNameorGeneration += "(1st Generation Facelift)";
            } else if (this.models[index].generation == 2) {
              this.models[index].codeNameorGeneration += "(2nd Generation Facelift)";
            } else if (this.models[index].generation == 3) {
              this.models[index].codeNameorGeneration += "(3rd Generation Facelift)";
            } else {
              this.models[index].codeNameorGeneration += "(" + this.models[index].generation + "th Generation Facelift)"
            }
          }
          if (!this.models[index].codeName && this.models[index].generation == 0) {
            this.models[index].codeNameorGeneration = "(Facelift)"
          }
        } else {
          if (this.models[index].codeName) {
            this.models[index].codeNameorGeneration += "(" + this.models[index].codeName + ") ";
          }
          if (this.models[index].generation != 0) {
            if (this.models[index].generation == 1) {
              this.models[index].codeNameorGeneration += "(1st Generation)";
            } else if (this.models[index].generation == 2) {
              this.models[index].codeNameorGeneration += "(2nd Generation)";
            } else if (this.models[index].generation == 3) {
              this.models[index].codeNameorGeneration += "(3rd Generation)";
            } else {
              this.models[index].codeNameorGeneration += "(" + this.models[index].generation + "th Generation)"
            }
          }
        }
      }
      this.pager = this.getPager(p.body.length);
    }
    );
  }
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 20): Pager {
    let totalPages = Math.ceil(totalItems / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    var pager = new Pager();
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;
    return pager;
  }
  setPage(page: number) {
    this.pager.currentPage = page;
  }
}
