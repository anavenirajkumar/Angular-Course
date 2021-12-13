import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor() { }

  country(){
    return [
      {
        id : 1,
        name : 'India'
      },{
        id : 2,
        name: 'USA'
      },{
        id : 3,
        name : 'UK'
      }
    ]
  }

  state(){
    return [
      {
        id : 1,
        name : 'Telanagana',
        country_code : 1
      },
      {
        id : 2,
        name : 'Andhrapradesh',
        country_code : 1
      }, {
        id : 3,
        name : 'New York',
        country_code :2
      },
      {
        id : 4,
        name : 'Washington',
        country_code : 2
      }, {
        id : 5,
        name : 'London',
        country_code : 3
      },
      {
        id : 6,
        name : 'Florida',
        country_code : 3
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
        id : 4,
        name : 'Karnool',
        countryid : 2
      },
      {
        id : 5,
        name : 'USA',
        countryid : 3

      },
      {
        id : 6,
        name : 'Texas',
        countryid : 3
      },
      {
        id : 7,
        name : 'Vizag',
        countryid : 4
      },
      {
        id : 8,
        name : 'Karnool',
        countryid : 4
      },
      {
        id : 9,
        name : 'squsuq',
        countryid : 5
      },
      {
        id : 10,
        name : 'Karbabsisiqnool',
        countryid : 5
      },
      {
        id : 11,
        name : 'AISUiua',
        countryid : 6
      },
      {
        id : 12,
        name : 'nxoIXIU',
        countryid : 6
      }
    ]
  }

  
}