import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(categories: any, searchText: any): any {
    if (searchText == null) {
      return categories;
    }

    return categories.filter((category) => {
      return category.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || category.mobile.toString().toLowerCase().indexOf(searchText.toString().toLowerCase()) > -1;
    });
  }

}
