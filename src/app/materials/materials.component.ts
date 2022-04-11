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
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

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
  type = environment.type;

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
    this.findByIdUser();

  }

  getAllPost() {

    this.postService.getAllPost().subscribe((resp: PostModel[]) => {

      resp.forEach(item => {

        if (!item.photo) {

          item.photo = "https://img.freepik.com/vetores-gratis/icone-de-perfil-de-avatar_188544-4755.jpg?size=338&ext=jpg";

        }

        this.listPost = resp;

      });

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
    environment.type = '';
  }

  buttonAdm() {

    let ok = false;

    if (this.type == 'adm') {

      ok = true;

    }

    return ok;

  }

}
