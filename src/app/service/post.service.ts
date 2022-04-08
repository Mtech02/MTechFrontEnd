import { PostModel } from './../Model/PostModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postModel: PostModel;

  constructor(

    private http: HttpClient

  ) { }

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token)

  }

  getAllPost(): Observable<PostModel[]>{

    return this.http.get<PostModel[]>("http://localhost:8080/post", this.token);

  }

  getByIdPost(id: number): Observable<PostModel>{

    return this.http.get<PostModel>(`http://localhost:8080/post/${id}`, this.token);

  }

  getByTitlePost(title: string): Observable<PostModel[]>{

    return this.http.get<PostModel[]>(`http://localhost:8080/post/title/${title}`, this.token);

  }

  post(post: PostModel): Observable<PostModel>{

    return this.http.post<PostModel>("http://localhost:8080/post", post, this.token);

  }

  put(post: PostModel): Observable<PostModel>{

    return this.http.put<PostModel>("http://localhost:8080/post", post, this.token);

  }

  deletePost(id: number){

    return this.http.delete(`http://localhost:8080/post/${id}`, this.token);

  }

}
