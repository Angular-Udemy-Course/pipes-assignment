import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: [object], propName: string): any {
    return value.sort((a, b) => {
      return a[propName].localeCompare(b[propName]);
    });
  }

}
