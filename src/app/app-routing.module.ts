import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'favorite', component: FavoritesComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
