import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: DataService) { }
  public registerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    city: ['', Validators.required],
    age: ['', Validators.required],
  });

  ngOnInit(): void {
  }
register(){
  console.log("Fired");
  if(this.registerForm.valid){
    // console.log("Fired twice");
    // this.service.RegisterUser(this.registerForm.value).subscribe((data: any) =>{
    //   console.log("Added User");
    //   console.log(this.registerForm.value);
    // }, ((error:any) => {
    //   console.log("Error in registering user");
      
    // }));
    this.service.RegisterUser(this.registerForm.value).subscribe((data: any) => {
      console.log(data.message)
    });
  }
}

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get city() { return this.registerForm.get('city') }
  get age() { return this.registerForm.get('age') }
}
