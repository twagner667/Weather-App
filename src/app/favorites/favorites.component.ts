import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import FavoriteObj from '../models/favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private service: DataService, private route: Router) { }
  public username: string;
  public favs: Array<FavoriteObj>;
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.service.GetFavorites().subscribe((data:any) => {
      this.favs = data;
    });
  }

  removeFav(fav: FavoriteObj){
    this.service.RemoveFavorites(fav.id).subscribe((data:Array<FavoriteObj>) => {
      this.service.GetFavorites().subscribe((data:any) => {
        this.favs = data;
      });
    });
  }

}
