import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css']
})
export class DropdownSelectComponent implements OnInit {

  constructor() {}

	ngOnInit() {
	}
	
	selectedCountry: String = "--Choose Country--";
  selectedState: String = "--Choose State--";

  showStates: boolean = false;
  showCities:boolean = false;

  
	Countries: Array<any> = [
		{ name: 'Germany', id: 1, states: [ {name: 'A', country_code: 1, cities: [{name: 'Duesseldorf',  country_code :1}]} ] },
		{ name: 'Spain',id: 2, states: [ {name: 'B',country_code :2, cities: [{name: 'Barcelona',  country_code :2}]} ] },
		{ name: 'USA', id: 3, states: [ {name: 'C', country_code :3, cities: [
      {name: 'New York',  country_code : 3 ,},{name: 'Washington',  country_code : 3}
    ]} ] },
		{ name: 'Mexico',id: 4, states: [ {name: 'D', country_code :4, cities: [{name: 'Puebla',  country_code :4}]} ] },
		{ name: 'India',id: 5, states: [ {name: 'E', country_code :5, cities: [{name: 'Delhi',  country_code :5}]} ] },
	];
  
    
	states:any = [];

	cities:any = [];
	
	changeCountry(country: any) {
    console.log("IM Checked Country", country.target.value)
    if(country.target.value){
      this.showStates = true;
      this.states = this.Countries.find((c:any) => c.id == country.target.value).states;
      this.cities = [];
      
     } 
      else if(!country.target.value && this.selectedCountry === "--Choose Country--") {
       this.showCities = false;
       this.showStates = false;
      this.states =[]; 
      this.cities = [];
     }
     else {
       this.showStates = false;
       this.showCities = false;
      console.log(this.states)
      console.log(this.cities)
       this.states = [];
       this.cities = [];
       console.log(this.cities)
       return
    }
  //this.states = this.Countries.find((c: any) => c.country_code == country.target.value).states;  //Country ID == Country Code in States

  console.log(this.states)
	}
	changeState(state: any) {
     console.log(this.cities);
     if(state.target.value){
       this.showCities =true;
      this.cities = this.states.find((c:any) => c.country_code == state.target.value).cities;
     } else {
       this.showCities = false;
       this.cities =[]
     }
  }
}
