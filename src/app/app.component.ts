import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  //username = "hello"
  constructor(public service:DataService) { }
  public username: string;
  ngOnInit(): void {
  }

  signout(){
    localStorage.removeItem("token")
    localStorage.removeItem("username");
    this.service.GetUsername("");
  }
}
