import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  exform: FormGroup | any;
  public courses:string[]=['html','css','javascript','bootstrap','angular','reactjs']
  public inputType : string = 'password';
  constructor() { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      date : new FormControl('', [Validators.required]),
      password : new FormControl('',[Validators.required, Validators.minLength(8), 
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      conformpassword : new FormControl('', [Validators.required, Validators.minLength(5)]),
      showPassword: new FormControl(false),
      phone: new FormControl('', [Validators.required,Validators.maxLength(10), Validators.pattern('[6-9]\\d{9}')]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
      address2: new FormControl(),
      AdreessCheckbox: new FormControl(false),
      course : new FormControl('',[Validators.required]),

      country : new FormGroup({
          countryName : new FormControl('',[Validators.required,Validators.minLength(5)]),
          stateName : new FormControl('',[Validators.required,Validators.minLength(5)]),
          cityName: new FormControl('', [Validators.required,Validators.minLength(5)])
      }),

      gender: new FormControl('', Validators.required),
      isTCAccepted: new FormControl('', Validators.requiredTrue)
      // acceptTerms: new FormControl([false, Validators.requiredTrue]),
    });
  }


  clicksub() {
    //debugger;
        // console.log(this.exform.value);
    this.exform.markAllAsTouched();
    if(this.exform.valid && this.validatePassord()){
      //this.exform.value.password === this.exform.value.conformpassword;
      console.log(this.exform.value)
      this.exform.reset();
    }
    // console.log(this.exform.value);
    //this.exform.reset();
  }
  // public name() {
  //   return this.exform.get('name');
  // }
  // public email() {
  //   return this.exform.get('email');
  // }
  // public password(){
  //   return this.exform.get('password')
  // }
  // public conformpassword(){
  //   return this.exform.get('conformpassword')
  // }

  public validatePassord(){
    // console.log(this.exform.value.password);
    // console.log(this.exform.value.conformpassword)
    console.log(this.exform.value.password === this.exform.value.conformpassword)

    return this.exform.value.password === this.exform.value.conformpassword;
  }
  
//   public phone() {
//     return this.exform.get('phone');
//   }
//   public address() {
//     return this.exform.get('address');
//   }

//   public getCourse(){
//     return this.exform.get('course')
//   }
//   public date(){
//     return this.exform.get('date')
//   }

//   public isTCAccepted() {
//     return this.exform.get('isTCAccepted');
//  }

//  public gender(){
//    return this.exform.get('gender')
//  }

//   public acceptTerms(){
//     return this.exform.get('acceptTerms')
//   }

  public remember(e:any){
    if(e.target.checked){
      // this.exform.address2 = this.exform.value.address;
      // console.log(this.exform.address2)
      this.exform.get('address2').setValue(this.exform.value.address);
   }else{
    // this.exform.address2 = '';
    this.exform.get('address2').setValue('');

   }
  }

  public showPassword(){
    (this.inputType === 'password') ? this.inputType = 'text' : this.inputType = 'password';
  }

  // public everykeyord(e:any){
  //   // this.exform.get('address2').setValue(this.exform.value.address);
  //   this.exform.get('address2').setValue(this.exform.value.address);

  //   //this.exform.address2 = this.exform.value.address;
   
  // }

  
  public getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
  

}