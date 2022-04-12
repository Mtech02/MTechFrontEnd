import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { ThemeComponent } from './theme/theme.component';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { DeleteThemeComponent } from './delete/delete-theme/delete-theme.component';
import { DeletePostComponent } from './delete/delete-post/delete-post.component';
import { AlertComponent } from './alert/alert.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedComponent,
    ThemeComponent,
    ThemeEditComponent,
    PostEditComponent,
    UserEditComponent,
    DeleteThemeComponent,
    DeletePostComponent,
    AlertComponent,
    ProfileComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy, 
    useClass: HashLocationStrategy
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
