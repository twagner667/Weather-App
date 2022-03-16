import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  username:string = "";
  login:boolean = false;
  RegisterUser(user:any) {
    //return this.http.post('http://localhost:9000/auth/register', user);
    return this.http.post('https://localhost:44346/api/Auth/register', user);
  }
  LoginUser(user:any){
    //return this.http.post('http://localhost:9000/auth/login', user)
    return this.http.post('https://localhost:44346/api/Auth/Login', user);
  }

  IsAuthenticated(token) {
    // return this.http.post('http://localhost:9000/auth/isAuthenticated', null, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // });
    return this.http.post('https://localhost:44346/api/Auth/isAuthenticated', null, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  GetHeadlines(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=a522a4e0b79b4f34bec5fc34eea72d2d")
  }

  AddToFavorites(news:any) {
    //return this.http.post('http://localhost:3000/favorites', news);
    return this.http.post('https://localhost:44360/api/Favorite', news);
  }
  RemoveFavorites(id:number){
    //return this.http.delete(`http://localhost:3000/favorites/${id}`);
    return this.http.delete(`https://localhost:44360/api/Favorite/${id}`);
  }
  GetFavorites(){
    //return this.http.get("http://localhost:3000/favorites");
    return this.http.get("https://localhost:44360/api/Favorite");
  }


  GetUsername(username:string){
    this.username = username;
  }

}
