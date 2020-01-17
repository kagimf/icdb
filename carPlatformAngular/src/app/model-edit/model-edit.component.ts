import { Component, OnInit } from '@angular/core';
import { Model } from '../model/model';
import { ModelService } from '../model/model.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.css']
})
export class ModelEditComponent implements OnInit {

  model:Model = new Model(-1, -1, "", "", -1, "", null, -1, -1, "");

  constructor(private activatedRoute: ActivatedRoute, private modelService:ModelService, private router:Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.getModel(params["modelId"]);
    })

  }

  getModel(modelId:string){

    this.modelService.getModel(modelId).subscribe(p => {
      this.model = p.body;
    });

  }

  checkout(form: NgForm) {
    this.modelService.putModel(form, this.model.brand.id.toString(), this.model.id.toString()).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(["model"]);
  }

}
