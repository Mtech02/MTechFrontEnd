import { ThemeModel } from './../Model/ThemeModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(

    private http: HttpClient

  ) {}

    token = {

      headers: new HttpHeaders().set('Authorization', environment.token)

    }

    getAllTheme(): Observable<ThemeModel[]>{

      return this.http.get<ThemeModel[]>("https://innovationmtech.herokuapp.com/theme", this.token);

    }

    getByIdTheme(id: number): Observable<ThemeModel>{

      return this.http.get<ThemeModel>(`https://innovationmtech.herokuapp.com/theme/${id}`, this.token);

    }

    getByNameTheme(theme: string): Observable<ThemeModel[]>{

      return this.http.get<ThemeModel[]>(`https://innovationmtech.herokuapp.com/theme/theme/${theme}`, this.token);

    }

    postTheme(themeModel: ThemeModel): Observable<ThemeModel>{

      return this.http.post<ThemeModel>("https://innovationmtech.herokuapp.com/theme", themeModel, this.token);

    }

    putTheme(themeModel: ThemeModel): Observable<ThemeModel>{

      return this.http.put<ThemeModel>("https://innovationmtech.herokuapp.com/theme", themeModel, this.token);

    }

    deleteTheme(id: number){

      return this.http.delete(`https://innovationmtech.herokuapp.com/theme/${id}`, this.token);

    }

}
