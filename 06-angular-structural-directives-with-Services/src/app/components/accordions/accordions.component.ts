import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.css']
})
export class AccordionsComponent implements OnInit {
  
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
