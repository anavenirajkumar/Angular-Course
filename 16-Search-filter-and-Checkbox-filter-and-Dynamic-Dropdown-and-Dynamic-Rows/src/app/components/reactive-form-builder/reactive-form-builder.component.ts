import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl, FormBuilder } from '@angular/forms';
import { nameValidator } from '../reactive-form-builder/validators/user.name'; // for "admin" name validator
@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {

  public courses:string[]=['html','css','javascript','bootstrap','angular','reactjs']
  public inputType : string = 'password';

  constructor(private formBuilder : FormBuilder) { }

  public registerForm : FormGroup | any;

  ngOnInit(): void {
    ////////////////////// Form Builder //////////////////////
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(5),nameValidator(/password/),,nameValidator(/admin/),,nameValidator(/Rajkumar/)]], // "admin" & "Rajkumar" & "password" not taking
      email : ['',[Validators.required, Validators.email]],
      date :  ['',[Validators.required]],
      password : ['',[Validators.required, Validators.minLength(8), 
         Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      conformpassword : ['',[Validators.required, Validators.minLength(8)]],
      showPassword: ['',false],
      phone: ['',[Validators.required,Validators.maxLength(10), Validators.pattern('[6-9]\\d{9}')]],
      address: ['', [Validators.required,
          Validators.minLength(20)]],
      address2: [''],
      AdreessCheckbox:['',false],
      course : ['',[Validators.required]],
      country : this.formBuilder.group({
        countryName : ['',[Validators.required,Validators.minLength(5)]],
        stateName : ['',[Validators.required,Validators.minLength(5)]],
        cityName: ['',[Validators.required,Validators.minLength(5)]]
      }),
      gender: ['',[Validators.required]],
      isTCAccepted: ['',[Validators.requiredTrue]],

      // extra : [''],  // Extra
      // extracheckbox : [false], // Extra
    });
    
    // this.registerForm.get('extracheckbox').valueChanges.subscribe((checkedValue:any) => { // Extra
    //      const extra = this.registerForm.get('extra');
    //      if(checkedValue){
    //        extra.setValidators(Validators.required);
    //      } else {
    //        extra.clearValidators;
    //      } 
    //      extra.updateValueAndValidity();

    // })
  }


  clicksub() {
    //debugger;
        // console.log(this.registerForm.value);
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid && this.validatePassord()){
      //this.registerForm.value.password === this.registerForm.value.conformpassword;
      console.log(this.registerForm.value)
      this.registerForm.reset();
    }

  }

  public validatePassord(){
    // console.log(this.registerForm.value.password);
    // console.log(this.registerForm.value.conformpassword)
    console.log(this.registerForm.value.password === this.registerForm.value.conformpassword)

    return this.registerForm.value.password === this.registerForm.value.conformpassword;
  }


  public remember(e:any){
    if(e.target.checked){
      // this.registerForm.address2 = this.registerForm.value.address;
      // console.log(this.registerForm.address2)
      this.registerForm.get('address2').setValue(this.registerForm.value.address);
   }else{
    // this.registerForm.address2 = '';
    this.registerForm.get('address2').setValue('');

   }
  }

  public showPassword(){
    (this.inputType === 'password') ? this.inputType = 'text' : this.inputType = 'password';
  }

  // public everykeyord(e:any){
  //   // this.registerForm.get('address2').setValue(this.registerForm.value.address);
  //   this.registerForm.get('address2').setValue(this.registerForm.value.address);

  //   //this.registerForm.address2 = this.registerForm.value.address;
   
  // }

  // get name(){ //if write this function
  //   return this.registerForm.get('name');
  //   // [class.is-invalid]="name.touched && name.invalid" => in html validation code
  // }
  
  public getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

}