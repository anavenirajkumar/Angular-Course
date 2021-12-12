import { Component, OnInit } from '@angular/core';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.html',
  styleUrls: ['./dynamic-dropdown.component.css']
})
export class DynamicDropdownComponent implements OnInit {
   
  //Method 1
  public state:any;  
  public city:any; 

  ///Method 2
  public country:string[]= ['India','Usa', 'Uk','Newzeeland','Canada'];
  public list:string[]=[];
  public india:string[]= ['Hyderabad', 'karimnagar','warangal']
  public usa:string[]= ['washington', 'New York','texas','California']
  public uk:string[]= ['london']
  public newzeeland:string[]= ['newz', 'dnwdwu']
  public canada:string[]= ['canadian', 'area51']


     // Method 3
	Countries:any = [
		{ name: 'Canada', country_id :1,

     states: [ 
       {name: 'Alberta', id :1, country_code :1,
     cities: [{
       name : 'Jasper', sno: 1,  id :1
     },{
      name : 'Delta', sno :2, id :2
    }
    ]},
     {name: 'British Columbia', id :2, country_code :1,
     cities: [{
       name : 'Hope', sno :1, id :1
     },{
      name : 'Nelson', sno :2, id :2
    }]}
     ] }
     ,
		{ name: 'UK', country_id :2,

     states: [ {name: 'Dorset', id :1, country_code :2,
      cities: [{
        name : 'East Dorset', sno:1, id :1, 
      }]},
      {name: 'Durham', id :2, country_code :2,
      cities: [{
        name : 'Lewes', sno: 2, id :2, 
      }]} ] },

		{ name: 'USA', country_id: 3,
    
    states: [{
      name: 'California',  id: 1, country_code :3,
        cities: [{
          name : 'Los Angeles', sno :1, id :3
        },
        {
          name : 'New York', sno:2, id :3
        }]
      },
      {
        name: 'Texas',  id: 2, country_code :3,
          cities: [{
            name : 'Houston', sno:1, id :3
          },{
            name : 'Washington', sno:2, id :3
          }]
        },
    ] },
      
		{ name: 'Mexico', country_id :4,

     states: [{
       name: 'Oaxaca', id: 1, country_code :4,
      cities: [{
        name : 'Oaxaca de Juarez',sno:1, id : 4,
      },{
        name : 'Queretaro', sno :2, id : 4,
      }]},

      {name: 'Puebla', id: 2, country_code :4,
      cities: [{
        name : 'Chetumal',sno :1, id : 4, 
      },{
        name : 'Queretaro',ano :2, id : 4,
      }]}
     ] },

		{ name: 'India', country_id: 5,

    states: [
      {name: 'Telanagana', id: 1, country_code :5,
    cities: [{
      name: 'Karimnagar', sno :1, id :5,
    },{
      name: 'Hyderabad', sno :2, id :5,
    }]},
    {name: 'Andhrapradesh', id: 2, country_code :5,
    cities: [{
      name: 'Vizag', sno :1, id :5,
    }, {
      name: 'Karnool', sno :2, id :5,
    }]},
  ] },
	];
  
	states:any = []; 
	cities: any= []; 
  selectedProperty:string ="Choose Country"
  selectedState :string ="Choose State"

  constructor(private statesService : StatesService) { }

  ngOnInit(): void {
    this.state = this.statesService.state();
    console.log(this.state)
    this.city = this.statesService.city();
    console.log(this.city)
  }

  public selectState(state:any){
      console.log(state.target.value)
    this.city = this.statesService.city().filter(e=> e.countryid == state.target.value); 
    console.log(this.city)
    //console.log(this.city)
  }

  // public selectCity(city:any){
  //   console.log(city.target.value)
  //   this.state = this.statesService.state().filter(e=> e.id == city.target.value); 
  //   console.log(this.state);
  //     this.state.get('state').setValue(this.state);
  // }

  public updateState(e:any){
    console.log(e.target.value)
    switch(e.target.value){
          case 'India' : 
              this.list = this.india
              console.log(this.list)
          break;

          case 'Usa' : 
              this.list = this.usa;
          break;

          case 'Uk':
             this.list = this.uk
          break;

          case 'Newzeeland' :
              this.list = this.newzeeland;
          break;

          case 'Canada' :
              this.list = this.canada;
          break;
          
          default : 
              this.list = [];
          break;
    }
  }

  //changeCountry(country) { 
	changeCountry(country: any) { 
    console.log("IM Country Code",country.target.value)
	if(country.target.value){
    this.states = this.Countries.find((c: any) => c.country_id == country.target.value).states;  //Country ID == Country Code in States
    console.log("IM State Code",this.states);
    this.cities =[];
  } else if(!country && this.selectedProperty =="Choose Country"){
     console.log("-------------------------------------")
    // return
     this.Countries = [];
     this.states = []
     this.cities = [];
  } else {
    //this.Countries = [];
    this.states = []
    this.cities = [];
    return
  }
 
	}

	//changeState(state) { 
	changeState(state: any) { 
    console.log("IM Checked State Dropdown",state.target.value)
		if(state.target.value){
      this.cities = this.states.find((s: any) => s.id == state.target.value).cities; 
      console.log(this.cities)
    }  else {
    //  //this.Countries = [];
    //  //this.states = []
      this.cities = [];
     return
   }
	}
  

}