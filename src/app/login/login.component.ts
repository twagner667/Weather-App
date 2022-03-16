import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import LoginObj from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:DataService, private route: Router) { }
  public log = new LoginObj();
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(this.log.Email);
      console.log(this.log.Password);
      this.service.LoginUser({email: this.log.Email, password: this.log.Password}).subscribe((data: any) => {
        // localStorage.setItem('token', data.access_token);
        console.log(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('username',this.log.Email);
        this.route.navigateByUrl("/");
        this.service.GetUsername(this.log.Email);//Check here
      });
    }
  }

}
