import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);
  }
  login(){
    this.authService.Login(this.userLogin).subscribe((resp:UserLogin) =>{

      this.userLogin=resp;

      environment.token=this.userLogin.token;
      environment.id=this.userLogin.id;
      environment.name=this.userLogin.name;
      environment.photo=this.userLogin.photo;

      this.router.navigate(['/feed']);
      
    }, error =>{if(error.status==500 || error.status==401){

      alert("Usuária ou senha inválidas!");

    }})
  }
}
