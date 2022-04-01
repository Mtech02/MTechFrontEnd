import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [

  {path: '', redirectTo: 'home',pathMatch:'full'},

  {path:'home', component:HomeComponent}, 
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'feed', component:FeedComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
