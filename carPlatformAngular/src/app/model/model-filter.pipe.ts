import { Pipe, PipeTransform } from '@angular/core';
import { Model } from './model'

@Pipe({
  name: 'modelFilter'
})
export class ModelFilterPipe implements PipeTransform {

  transform(value: Model[], filterText?: string): Model[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((p:Model)=>(p.modelName+p.brand.brandName+p.codeName).toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
