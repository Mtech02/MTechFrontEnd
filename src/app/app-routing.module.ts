import { SupportComponent } from './support/support.component';
import { MaterialsComponent } from './materials/materials.component';
import { JobComponent } from './job/job.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseComponent } from './course/course.component';
import { DeleteThemeComponent } from './delete/delete-theme/delete-theme.component';
import { DeletePostComponent } from './delete/delete-post/delete-post.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { ThemeComponent } from './theme/theme.component';
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
  {path:'feed', component:FeedComponent},
  {path: 'theme', component:ThemeComponent},
  {path: 'edit-theme/:id', component: ThemeEditComponent},
  {path: 'edit-user/:id', component: UserEditComponent},
  {path: 'edit-post/:id', component: PostEditComponent},
  {path: 'delete-post/:id', component: DeletePostComponent},
  {path: 'delete-theme/:id', component: DeleteThemeComponent},
  {path: 'myprofile', component: ProfileComponent},
  {path: 'jobs', component: JobComponent},
  {path: 'materials', component: MaterialsComponent},
  {path: 'courses', component: CourseComponent},
  {path: 'support', component: SupportComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
