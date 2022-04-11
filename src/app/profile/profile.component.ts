import { UserModel } from './../Model/UserModel';
import { ThemeModel } from './../Model/ThemeModel';
import { PostModel } from './../Model/PostModel';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { ThemeService } from './../service/theme.service';
import { PostService } from './../service/post.service';
import { AlertsService } from './../service/alerts.service';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  postModel: PostModel = new PostModel();
  listPost: PostModel[];
  titlePost: string;

  theme: ThemeModel = new ThemeModel();
  listTheme: ThemeModel[];
  idTheme: number;
  themePost: string;

  user: UserModel = new UserModel();
  idUser = environment.id;

  key = 'data';
  reverse = true;

  id = environment.id;
  photo = environment.photo;
  name = environment.name;
  description = environment.description;

  constructor(

    private router: Router,
    public alerts: AlertsService,
    private postService: PostService,
    private themeService: ThemeService,
    private authService: AuthService,

  ) { }

  ngOnInit() {

    window.scroll(0, 0);

    if (environment.token == '') {

      this.alerts.showAlertInfo("Sua sessão expirou!");
      this.router.navigate(["/home"]);
    }

    this.getAllTheme();
    this.getAllPost();

  }

  getAllPost() {

    this.postService.getAllPost().subscribe((resp: PostModel[]) => {

      this.listPost = resp;

    });

  }

  getAllTheme() {

    this.themeService.getAllTheme().subscribe((resp: ThemeModel[]) => {

      this.listTheme = resp;

    });

  }

  findByIdTheme() {

    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: ThemeModel) => {

      this.theme = resp;

    });

  }

  findByIdUser() {

    this.authService.getByUser(this.idUser).subscribe((resp: UserModel) => {

      this.user = resp;

    });

  }

  findByTitlePost() {

    if (this.titlePost == '') {

      this.getAllPost();

    } else {

      this.postService.getByTitlePost(this.titlePost).subscribe((resp: PostModel[]

      ) => {

        this.listPost = resp;

      });

    }

  }

  findByThemePost() {

    if (this.themePost == '') {

      this.getAllPost();

    } else {

      this.themeService.getByNameTheme(this.themePost).subscribe((resp: ThemeModel[]
      ) => {

        this.listTheme = resp;

      });

    }

  }

  post() {

    this.theme.id = this.idTheme;
    this.postModel.theme = this.theme;

    this.user.id = this.idUser;
    this.postModel.user = this.user;

    this.postService.post(this.postModel).subscribe((resp: PostModel) => {

      this.postModel = resp;
      this.alerts.showAlertSuccess("Postagem publicada com sucesso!");
      this.postModel = new PostModel();

      this.getAllPost();

    })

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
