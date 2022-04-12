import { UserModel } from './../Model/UserModel';
import { ThemeModel } from './../Model/ThemeModel';
import { PostModel } from './../Model/PostModel';
import { AlertsService } from './../service/alerts.service';
import { AuthService } from './../service/auth.service';
import { ThemeService } from './../service/theme.service';
import { PostService } from './../service/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  id = environment.id;
  photo = environment.photo;
  name = environment.name;
  description = environment.description;

  constructor(

    private router: Router,
    public alerts: AlertsService,

  ) { }

  ngOnInit() {

    window.scroll(0, 0);

    if (environment.token == '') {

      this.alerts.showAlertInfo("Sua sessão expirou!");
      this.router.navigate(["/home"]);
    }


  }

  send(){

    this.router.navigate(["/feed"]);
    this.alerts.showAlertSuccess("Mensagem enviada com sucesso!")

  }

  logoff() {
    this.router.navigate(["/home"]),
      environment.photo = "";
    environment.token = "";
    environment.name = "";
    environment.id = 0;
    environment.description = '';
  }

}
