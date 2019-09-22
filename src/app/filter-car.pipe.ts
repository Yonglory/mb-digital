import { Pipe, PipeTransform } from '@angular/core';
import { global } from './global.service';
@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  constructor(private global: global) { }
  transform(items: any, searchBy: string, searchText?: any): any {
    console.log(items, searchBy, searchText)
    if (!items) return [];
    if (!searchText) {
      this.global.nofilterdata = false;
      return items;
    }
    if (searchBy) {
      const filterItems = items.filter(it => {
        // console.log(it)
        return it[searchBy].toLowerCase().includes(searchText.toLowerCase());
      });
      if (filterItems.length > 0) {
        this.global.nofilterdata = false;
        return filterItems;
      }
      else {
        this.global.nofilterdata = true;
      }
    }
  }

}
