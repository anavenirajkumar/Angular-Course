import { Component, OnInit } from '@angular/core';
import { IcontactService } from './services/icontact.service';
import { IContact } from './model/IContact';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  public contacts:IContact[]=[];

  public SearchData:any[]=[];

  public searchFilter:string = ''; // Search Filter
   
  constructor(private contactService : IcontactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data)=>{
      this.contacts = data;
      this.SearchData=this.contacts
      console.log(this.contacts)

    })
  }
  public Search(){
    console.log(this.searchFilter)
    // Method 1 
    // this.contacts = this.contacts.filter(res => {
    //   return res.name.first.toLocaleLowerCase().match(this.searchFilter.toLocaleLowerCase());
    // }) 

    // Method 2
    //this.SearchData=this.contacts
    this.SearchData = this.contacts.filter(res => res.name.first.toLocaleLowerCase().match(this.searchFilter.toLocaleLowerCase()))
     //this.SearchData = this.contacts.filter(res => res.name.first)this.(this.searchFilter);
  }

}
