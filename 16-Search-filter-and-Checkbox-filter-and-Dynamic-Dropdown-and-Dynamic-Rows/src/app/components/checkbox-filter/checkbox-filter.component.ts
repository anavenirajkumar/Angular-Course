import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit {

  public selectAll :boolean= false;
  public options:any[]=[
    {
      id: 1,
      name : 'angular',
      select : false
    },
    {
      id : 2,
      name : 'react js',
      select : false
    },
    {
      id  : 3,
      name : 'node js',
      select : false
    },
    {
      id : 4,
      name : 'java',
      select : false
    },
    {
      id : 5,
      name : 'python',
      select : false
    },
    {
      id : 6,
      name : '.net',
      select : false
    }

  ]
  public searchFilter:string = ''; // Search Filter
  public SearchData:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.SearchData = this.options;
    console.log(this.SearchData)
  }

  public checkFilter($event:any){
    const id = $event.target.value
    const isChecked = $event.target.checked;
    console.log(id, isChecked)
    
    this.options = this.options.map((d)=>{
      if(d.id == id){
        d.select = isChecked;
        this.selectAll = false;
        return d
      }
      if(id == -1){
        d.select = this.selectAll;
        console.log(this.selectAll)
        return d;
      }
      return d;
    });
    console.log(this.options)
  }
  
  public Search(){
      this.SearchData = this.options.filter(res => res.name.toLocaleLowerCase().match(this.searchFilter.toLocaleLowerCase()));
      //this.SearchData = this.contacts.filter(res => res.name.first.toLocaleLowerCase().match(this.searchFilter.toLocaleLowerCase()))

  }

}
