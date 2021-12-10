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

  public searchFilter:string = ''; // Search Filter
   
  constructor(private contactService : IcontactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data)=>{
      this.contacts = data;
    })
  }

}
