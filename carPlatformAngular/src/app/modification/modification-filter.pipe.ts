import { Pipe, PipeTransform } from '@angular/core';
import { Modification } from './modification';
import { ModificationService } from './modification.service';

@Pipe({
  name: 'modificationFilter'
})
export class ModificationFilterPipe implements PipeTransform {

  transform(value: Modification[], filterText?: string): Modification[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;

    return filterText?value.filter((p:Modification)=>p.modificationName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
