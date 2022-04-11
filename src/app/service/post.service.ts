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

    return this.http.get<PostModel[]>("https://innovationmtech.herokuapp.com/post", this.token);

  }

  getByIdPost(id: number): Observable<PostModel>{

    return this.http.get<PostModel>(`https://innovationmtech.herokuapp.com/post/${id}`, this.token);

  }

  getByTitlePost(title: string): Observable<PostModel[]>{

    return this.http.get<PostModel[]>(`https://innovationmtech.herokuapp.com/post/title/${title}`, this.token);

  }

  post(post: PostModel): Observable<PostModel>{

    return this.http.post<PostModel>("https://innovationmtech.herokuapp.com/post", post, this.token);

  }

  put(post: PostModel): Observable<PostModel>{

    return this.http.put<PostModel>("https://innovationmtech.herokuapp.com/post", post, this.token);

  }

  deletePost(id: number){

    return this.http.delete(`https://innovationmtech.herokuapp.com/post/${id}`, this.token);

  }

}
