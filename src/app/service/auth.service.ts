import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../Model/UserLogin';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Model/UserModel';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private html:HttpClient) { }

  Login(userLogin: UserLogin): Observable<UserLogin>{

    return this.html.post<UserLogin>('http://localhost:8080/user/login', userLogin);

  }

  Register(user:UserModel): Observable<UserModel>{

    return this.html.post<UserModel>('http://localhost:8080/user/register', user);

  }

  Update(user:UserModel): Observable<UserModel>{

    return this.html.put<UserModel>('http://localhost:8080/user/update', user);

  }

  Logged(){

    let ok = false;

    if(environment.token != ''){

      ok = true;

    }

    return ok;

  }

  getByUser(id: number): Observable<UserModel>{

    return this.html.get<UserModel>(`http://localhost:8080/user/${id}`);

  }

}