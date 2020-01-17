import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModificationService } from '../modification/modification.service';
import { Modification } from '../modification/modification';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modification-edit',
  templateUrl: './modification-edit.component.html',
  styleUrls: ['./modification-edit.component.css']
})
export class ModificationEditComponent implements OnInit {

  modification: Modification = new Modification(-1, -1, "", -1, -1, "", "", "", -1, -1, -1, -1, -1, -1, "", "", -1, "", "", "", "", -1, -1, -1, -1, -1, "", -1, "", -1, "", "");

  modificationId: string;

  constructor(private activatedRoute: ActivatedRoute, private modificationService: ModificationService, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.getModification(params["modificationId"]);
    })

  }

  getModification(modificationId: string) {

    this.modificationService.getModification(modificationId).subscribe(p => {
      this.modification = p.body;
    });

  }

  checkout(form: NgForm) {
    
    this.modificationService.putModification(form, this.modification.model.id.toString(), this.modification.id.toString()).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(["model/modification/view/"+this.modification.id.toString()]);
  }

}
