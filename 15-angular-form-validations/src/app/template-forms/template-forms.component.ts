import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

 
  public user:IUser = {
    username: '',
    email :'',
    date : '',
    password: '',
    phone : '',
    address : '',
    address2 : '',
    course : '',
    gender : '',
    isTCAccepted : ''
  };
  // public isEmpty:boolean | any;
  // public message:string | any;
  public isSubmitted:boolean | any;
  public courses:string[] = ['Angular' , 'React JS' , 'Ionic' , 'React Native'];
  constructor() { }

  ngOnInit(): void {
  }

  public submitEnroll(){
    // this.user.markAllAsTouched();
    //  e.enrollmentForm.reset();
    console.log(this.user)

    this.isSubmitted = true;
    let {username , email , date, password ,phone, address,address2, course, gender,isTCAccepted} = this.user;
    if(username !== '' && email !== '' && date !== '' && password !== '' && phone !== '' && address !== '' && address2 !== '' && course !== '' && gender !== '' && isTCAccepted !== ''){
        // this.isEmpty = false;
          // this.message = data.msg
          console.log(this.user)   
    }
    else {
      // this.isEmpty = true;
      this.isSubmitted = false;
    }
  }

  public remember(e:any){
    if(e.target.checked){
      this.user.address2 = this.user.address;
      console.log(this.user.address2)
    }
    else{
      this.user.address2 = '';
    }
  }


}
