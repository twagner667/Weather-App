import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError, catchError, map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthGuard } from '../gaurds/auth.guard';
import FavoriteObj from '../models/favorite';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private route: Router, private service: DataService, private auth: AuthGuard) { }
  public username: string;
  public news: Array<any>;
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.service.GetHeadlines().subscribe((data: any) =>{
        console.log(data);
        this.news = data.articles;
        console.log(this.news[0]);
        
    });
  }

  addFavorite(card: any){
    if(localStorage.getItem("username") != null){
      console.log("fire")
      var favorite = new FavoriteObj;
      favorite.Author = card.author;
      favorite.Title = card.title;
      favorite.Url = card.url;
      favorite.Description = card.description;
      favorite.UrlToImage = card.urlToImage;
      favorite.Username = localStorage.getItem("username");
      console.log(favorite);

      this.service.AddToFavorites(favorite).subscribe();
      
    }else{
      console.log("missfire")
      this.route.navigateByUrl('/login');
    }
  }

}
