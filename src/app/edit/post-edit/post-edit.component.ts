import { AlertsService } from './../../service/alerts.service';
import { ThemeService } from './../../service/theme.service';
import { PostService } from './../../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModel } from './../../Model/ThemeModel';
import { PostModel } from './../../Model/PostModel';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postModel: PostModel = new PostModel();
  themeModel: ThemeModel = new ThemeModel();
  listTheme: ThemeModel[];
  idTheme: number;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private themeService: ThemeService,
    private alerts: AlertsService

  ) { }

  ngOnInit(){

    window.scroll(0,0);

    if (environment.token == '') {

      alert("Sua sessão expirou!");
      this.router.navigate(["/home"]);

    }

    let id = this.route.snapshot.params['id']
    this.findByIdPost(id);
    this.findAllTheme();

  }

  findByIdPost(id: number){

    this.postService.getByIdPost(id).subscribe((resp: PostModel) =>{

      this.postModel = resp;

    });

  }

  findByIdTheme(){

    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: ThemeModel) =>{

      this.themeModel = resp;

    });

  }

  findAllTheme(){

    this.themeService.getAllTheme().subscribe((resp: ThemeModel[]) =>{

      this.listTheme = resp;

    });

  }

  update(){

    this.themeModel.id = this.idTheme;
    this.postModel.theme = this.themeModel;

    this.postService.put(this.postModel).subscribe((resp: PostModel) =>{

      this.postModel = resp;
      alert("Postagem atualizada com sucesso!");
      this.router.navigate(['/feed']);

    })

  }

}
