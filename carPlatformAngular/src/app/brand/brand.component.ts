import { Component, OnInit } from '@angular/core';
import { Brand } from './brand';
import { BrandService } from './brand.service'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [BrandService]
})
export class BrandComponent implements OnInit {

  brands: Brand[];
  selectedBrand: Brand;
  constructor(private brandService: BrandService) {

  }

  ngOnInit() {
    this.getAllBrands()
  }
  getAllBrands() {
    this.brandService.getAllBrands()
      .subscribe(p => this.brands = p.body);
  }
  onSelect(brand?: Brand) {
    if (brand) {
      this.selectedBrand = brand;
    }else{
      this.selectedBrand = null;
    }
  }
}
