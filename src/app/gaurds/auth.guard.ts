import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError, catchError, map } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private service: DataService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.service.IsAuthenticated(localStorage.getItem('token')).pipe(map((data: any) => {
        // if(data.isAuthenticated){
        //   return true;
        // }
        console.log(data);
        if(data == true){
          return true;
        }
        return false;
      }), catchError((err:HttpErrorResponse) => {
        this.route.navigateByUrl('/login');
        return throwError(err);
      }));
  }
}
