import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }
  state(){
    return [
      {
        id : 1,
        name : 'Telanagana'
      },
      {
        id : 2,
        name : 'Andhrapradesh'
      }
    ]
  }

  city(){
    return [
      {
        id : 1,
        name : 'Karimnagar',
        countryid : 1

      },
      {
        id : 2,
        name : 'Hyderabad',
        countryid : 1
      },
      {
        id : 3,
        name : 'Vizag',
        countryid : 2
      },
      {
        id : 3,
        name : 'Karnool',
        countryid : 2
      }
    ]
  }

  
}