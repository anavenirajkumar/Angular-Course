import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value:any, searchFilter : string) {
     
    // Method 1
    // if(value.length === 0){
    //   return value
    // }
    //   const users = [];
    //   for(const user of value){
    //      if(user['name'] === searchFilter){
    //        users.push(user);
    //      }
    //   }
    //   return users;

    // Method 2

    // if (!value) {
    //   return [];
    // }
    // if (!searchFilter) {
    //   return value;
    // }
    // searchFilter = searchFilter.toLocaleLowerCase();

    // return value.filter((it:any) => {
    //   return it.toLocaleLowerCase().includes(searchFilter);
    // });

    ///Method 3
    // if (searchFilter) {
    //   searchFilter = searchFilter.toLowerCase();
    //   return value.filter(function (contact: any) {
   
    //       return ((contact.firstName.toLowerCase().indexOf(searchFilter)) && 
    //     (contact.name.toLowerCase().indexOf(searchFilter))) > -1;
    //      })
    //   }
    //   return value;
   
      }

}
