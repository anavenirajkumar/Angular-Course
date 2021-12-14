import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter-two',
  templateUrl: './checkbox-filter-two.component.html',
  styleUrls: ['./checkbox-filter-two.component.css']
})
export class CheckboxFilterTwoComponent implements OnInit {

  public options:any[]=[
    {
      id: 1,
      name : 'angular',
      checked : false
    },
    {
      id : 2,
      name : 'react js',
      checked : false
    },
    {
      id  : 3,
      name : 'node js',
      checked : false
    },
    {
      id : 4,
      name : 'java',
      checked : false
    },
    {
      id : 5,
      name : 'python',
      checked : false
    },
    {
      id : 6,
      name : '.net',
      checked : false
    }

  ]
  //public searchFilter:string = ''; // Search Filter
  
  constructor() { }

  ngOnInit(): void {
  }

  public checkAllCheckBox(ev: any) {
    console.log(ev.target.value);
    console.log(ev.target.checked); // true
    console.log(this.options);
		this.options.forEach(x => x.checked = ev.target.checked)
	}

	public EveryBoxChecked() {
    let test = this.options.every(p => p.checked);
    console.log(test)
		return this.options.every(p => p.checked); // Every Checkbox True
	}

  public submit(){
    console.log(this.options);
    localStorage.setItem("datas", JSON.stringify(this.options));
    console.log(this.options);
    //this.options.forEach(x => x.checked = false);

  }
  // public reset(event:any){
  //   console.log(event.target.value);
  // }

}