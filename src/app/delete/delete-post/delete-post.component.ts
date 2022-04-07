import { AlertsService } from './../../service/alerts.service';
import { PostService } from './../../service/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostModel } from './../../Model/PostModel';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  postModel: PostModel = new PostModel();
  idPost: number;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private alerts: AlertsService

  ) { }

  ngOnInit() {

    window.scroll(0, 0);

    if (environment.token == '') {

      alert("Sua sessão expirou!");
      this.router.navigate(["/home"]);
    }

    this.idPost = this.route.snapshot.params['id'];
    this.findByIdPost(this.idPost);

  }

  findByIdPost(id: number){

    this.postService.getByIdPost(id).subscribe((resp: PostModel) =>{

      this.postModel = resp;

    });

  }

  delete(){

    this.postService.deletePost(this.idPost).subscribe(() =>{

      alert("Publicação apagada com sucesso!");
      this.router.navigate(['/feed']);

    });

  }

}
