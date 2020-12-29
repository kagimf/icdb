import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import { ActivatedRoute } from '@angular/router';
import { Modification } from '../modification/modification';
import { ModificationService } from '../modification/modification.service';
import { ModelService } from '../model/model.service';
import { Model } from '../model/model';
import { PredecessorSuccessorService } from '../predecessor-successor/predecessor-successor.service';
import { PredecessorSuccessor } from '../predecessor-successor/predecessor-successor';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-modification-view',
  templateUrl: './modification-view.component.html',
  styleUrls: ['./modification-view.component.css']
})
export class ModificationViewComponent implements OnInit {

  modification: Modification;

  predecessors: PredecessorSuccessor[];

  successors: PredecessorSuccessor[];

  predecessorModels: Model[] = [];

  successorModels: Model[] = [];

  constructor(private activatedRoute: ActivatedRoute, private modificationService: ModificationService, private predecessorSuccessorService:PredecessorSuccessorService, private modelService:ModelService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.getModification(params["modificationId"]);
      
    })
    
    

  }

  getModification(modificationId: string) {

    this.modificationService.getModification(modificationId).subscribe(p => {
      this.modification = p.body;
      this.modification.roundedCylinderDisplacement = (Math.round(this.modification.cylinderDisplacement / 100) / 10).toFixed(1);
      this.getPredecessorsOfSuccessor(this.modification.model.id.toString());
      this.getSuccessorsOfPredecessor(this.modification.model.id.toString());
    });

  }

  getPredecessorsOfSuccessor(successorId: string) {

    this.predecessorSuccessorService.getPredecessorsofSuccessor(successorId).subscribe(p => {
      this.predecessors = p.body;
      for(var index in this.predecessors){
        this.getModel(this.predecessors[index].predecessorId.toString(), "P");
      }
    });

  }

  getSuccessorsOfPredecessor(predecessorId: string) {

    this.predecessorSuccessorService.getSuccessorsofPredecessor(predecessorId).subscribe(p => {
      this.successors = p.body;
      for(var index in this.successors){
        this.getModel(this.successors[index].successorId.toString(), "S");
      }
    });

  }

  getModel(modelId: string, type:string) {
    this.modelService.getModel(modelId).subscribe(p => {
      if(type === "P"){
        var model:Model = p.body;
        model.codeNameorGeneration = "";
        if (model.isFacelifted) {
          if (model.codeName) {
            model.codeNameorGeneration += "(" + model.codeName + " Facelift) ";
          }
          if (model.generation != 0) {
            if (model.generation == 1) {
              model.codeNameorGeneration += "(1st Generation Facelift)";
            } else if (model.generation == 2) {
              model.codeNameorGeneration += "(2nd Generation Facelift)";
            } else if (model.generation == 3) {
              model.codeNameorGeneration += "(3rd Generation Facelift)";
            } else {
              model.codeNameorGeneration += "(" + model.generation + "th Generation Facelift)"
            }
          }
          if (!model.codeName && model.generation == 0) {
            model.codeNameorGeneration = "(Facelift)"
          }
        } else {
          if (model.codeName) {
            model.codeNameorGeneration += "(" + model.codeName + ") ";
          }
          if (model.generation != 0) {
            if (model.generation == 1) {
              model.codeNameorGeneration += "(1st Generation)";
            } else if (model.generation == 2) {
              model.codeNameorGeneration += "(2nd Generation)";
            } else if (model.generation == 3) {
              model.codeNameorGeneration += "(3rd Generation)";
            } else {
              model.codeNameorGeneration += "(" + model.generation + "th Generation)"
            }
          }
        }
        this.predecessorModels.push(model);
      }else if(type === "S"){
        var model:Model = p.body;
        model.codeNameorGeneration = "";
        if (model.isFacelifted) {
          if (model.codeName) {
            model.codeNameorGeneration += "(" + model.codeName + " Facelift) ";
          }
          if (model.generation != 0) {
            if (model.generation == 1) {
              model.codeNameorGeneration += "(1st Generation Facelift)";
            } else if (model.generation == 2) {
              model.codeNameorGeneration += "(2nd Generation Facelift)";
            } else if (model.generation == 3) {
              model.codeNameorGeneration += "(3rd Generation Facelift)";
            } else {
              model.codeNameorGeneration += "(" + model.generation + "th Generation Facelift)"
            }
          }
          if (!model.codeName && model.generation == 0) {
            model.codeNameorGeneration = "(Facelift)"
          }
        } else {
          if (model.codeName) {
            model.codeNameorGeneration += "(" + model.codeName + ") ";
          }
          if (model.generation != 0) {
            if (model.generation == 1) {
              model.codeNameorGeneration += "(1st Generation)";
            } else if (model.generation == 2) {
              model.codeNameorGeneration += "(2nd Generation)";
            } else if (model.generation == 3) {
              model.codeNameorGeneration += "(3rd Generation)";
            } else {
              model.codeNameorGeneration += "(" + model.generation + "th Generation)"
            }
          }
        }
        this.successorModels.push(model);
      }
      this.predecessorModels = this.predecessorModels.sort((obj1, obj2) => {
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
      this.successorModels = this.successorModels.sort((obj1, obj2) => {
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
      
    });

  }

}
