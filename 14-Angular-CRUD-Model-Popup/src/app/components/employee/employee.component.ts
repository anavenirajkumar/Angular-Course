import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { IEmployee } from 'src/app/models/IEmployee';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public exform : FormGroup | any;
   employeeObj: IEmployee = new IEmployee();
   showAdd! :boolean;
   showUpdate! : boolean;
    constructor(private api: EmployeeService ) { }

    employees:any[] =[];  //load all employees
  ngOnInit(): void {
    
  this.exform = new FormGroup({
    fname : new FormControl('',[Validators.required]),
    lname : new FormControl('',[Validators.required]),
    email : new FormControl('', [Validators.email,Validators.required]),
    mobile : new FormControl('',[Validators.required,Validators.minLength(10)]),
    salary : new FormControl('',[Validators.required]),
  })
  this.getAllEmployees(); // when the page loads
  }

  clickAddEmployee(){
    this.exform.reset();
    this.showAdd = true;
    this.showUpdate = false;

  }

  public fname(){
    return this.exform.get('fname')
  }
  public lname(){
    return this.exform.get('lname')
  }
  public email(){
    return this.exform.get('email')
  }
  public mobile(){
    return this.exform.get('mobile')
  }
  public salary(){
    return this.exform.get('salary')
  }
  postEmployeeDetails(){
    this.exform.markAllAsTouched();
    if(this.exform.valid){
      this.employeeObj.fname = this.exform.value.fname;
      this.employeeObj.lname = this.exform.value.lname;
      this.employeeObj.email = this.exform.value.email;
      this.employeeObj.mobile = this.exform.value.mobile;
      this.employeeObj.salary = this.exform.value.salary;
  
      this.api.postEmployee(this.employeeObj).subscribe(res=>{
        console.log(res);
        alert('Employee Creation Sucessfully Submited');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.exform.reset();
        this.getAllEmployees();
      },err=>{
       alert('Something Went Wrong')
      })
    }
   
  }


  getAllEmployees(){
    this.api.getEmployee().subscribe(res=>{
      this.employees = res;
    })
  }

  deleteEmployee(emp:any){
     this.api.deleteEmployee(emp.id).subscribe(res=>{
       alert('Employee Deleted');
       this.getAllEmployees();
     })
  }

  onEdit(emp:any){
    this.showAdd = false;
    this.showUpdate = true;
      this.employeeObj.id = emp.id;
      this.exform.controls['fname'].setValue(emp.fname);
      this.exform.controls['lname'].setValue(emp.lname);
      this.exform.controls['email'].setValue(emp.email);
      this.exform.controls['mobile'].setValue(emp.mobile);
      this.exform.controls['salary'].setValue(emp.salary);

  }

  updateEmployeeDetails(){
    this.employeeObj.fname = this.exform.value.fname;
    this.employeeObj.lname = this.exform.value.lname;
    this.employeeObj.email = this.exform.value.email;
    this.employeeObj.mobile = this.exform.value.mobile;
    this.employeeObj.salary = this.exform.value.salary;

    this.api.updateEmployee(this.employeeObj,this.employeeObj.id).subscribe(res=>{
      alert('Updated Sucessfully');
      let ref = document.getElementById('cancel');
      ref?.click();
      this.exform.reset();
      this.getAllEmployees();
    })
  }

}
