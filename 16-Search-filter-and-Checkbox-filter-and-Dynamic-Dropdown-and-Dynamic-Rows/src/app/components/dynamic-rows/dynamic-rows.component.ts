import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-rows',
  templateUrl: './dynamic-rows.component.html',
  styleUrls: ['./dynamic-rows.component.css']
})
export class DynamicRowsComponent implements OnInit {

  form : FormGroup | any
  showValue:any;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : new FormControl('',[Validators.minLength(5), Validators.required]),
      email : new FormControl('',[Validators.minLength(5), Validators.required,Validators.email]),
      designation : new FormControl('',[Validators.minLength(10), Validators.required]),
      // password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      terms : new FormControl('',Validators.requiredTrue),
      // items : this.formBuilder.array([
      //   new FormControl('Angular'),
      //   new FormControl('React JS')
      // ])
      
      items : this.formBuilder.array([
        this.formBuilder.group({
          itemId : [],
          // itemName : ['React JS'],
          // itemDesc : ['Node JS'],
          itemDone : ['', Validators.requiredTrue]
        })
      ])
    });

              // Show Value
    this.form.get('email').valueChanges.subscribe((data:any)=>{
        this.showValue = data;
    })
        // Valid & Invalid Status in Console
    // this.form.get('email').statusChanges.subscribe((data:any)=>{
    //   console.log(data);
    // })
          
  }

    public submitForm(){
      this.form.markAllAsTouched();
      if(this.form.valid){
        console.log(this.form.value)
        this.form.reset();
      }

    }

  public resetForm(){
      this.form.reset();
  }

  get items(){
     return this.form.get('items') as FormArray;
  }

  public addNewRow(){
    // console.log(this.form.value)
   const itemLength = this.items.length;
   const newItems = this.formBuilder.group({
      itemId : [itemLength + 1],
      // itemName : [''],
      // itemDesc : [''],
      itemDone : ['', Validators.requiredTrue]
    });
    // console.log(this.form.value)
    this.items.push(newItems);
    // console.log(this.form.value)

  }

  public removeRow(id:any){
     this.items.removeAt(id);
  }

}