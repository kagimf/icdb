import { Component, OnInit } from '@angular/core';
import { Modification } from './modification';
import { Pager } from '../app-pager';
import { ActivatedRoute } from '@angular/router';
import { ModificationService } from './modification.service'

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {

  modifications: Modification[];
  pager: Pager = new Pager();

  constructor(private activatedRoute: ActivatedRoute, private modificationService: ModificationService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => { this.getAllModifications(params["modelId"]) })

  }

  getAllModifications(modelId: string) {
    this.modificationService.getAllModifications(modelId).subscribe(p => {
      this.modifications = p.body;
      this.pager = this.getPager(p.body.length);
    }
    );
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 7): Pager {
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
