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
		{ name: 'Germany', id :1,
     states: [ {name: 'A', id :1,
     cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
		{ name: 'Spain', id :2,
     states: [ {name: 'B', id :2,
      cities: ['Barcelona']} ] },
		{ name: 'USA', id: 3,
    states: [ {
      name: 'New York',  id: 3,
        cities: ['Downers Grove',]
      }] },
		{ name: 'Mexico', id :4,
     states: [ {name: 'D', id: 4,
      cities: ['Puebla']} ] },
		{ name: 'India', id: 5,
    states: [ {name: 'Telanagana', id: 5,
    cities: [{
      name: 'Karimnagar', id :1,
    }]} ] },
	];
  
	states:any = []; 
	cities: any= []; 


  // Method 4
   
selectedCountry = 0;
selectedState = 0;
 
rstates = [];
rcities = [];

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
    console.log(country.target.value)
		this.states = this.Countries.find((c: any) => c.id == country.target.value).states; 
	}

	//changeState(state) { 
	changeState(state: any) { 
		this.cities = this.states.find((s: any) => s.id == state.target.value).cities; 
	}
  

}