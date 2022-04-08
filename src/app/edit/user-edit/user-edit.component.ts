import { environment } from 'src/environments/environment.prod';
import { AlertsService } from './../../service/alerts.service';
import { AuthService } from './../../service/auth.service';
import { UserModel } from './../../Model/UserModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  idUser: number;
  user: UserModel = new UserModel();
  confirmPassword: string;
  typeUsers: string;
  photo: string;
  about: string;

  photoUser = environment.photo;

  constructor(

    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alerts: AlertsService

  ) { }

  ngOnInit() {

    window.scroll(0, 0);

    if (environment.token == '') {

      this.alerts.showAlertInfo("Sua sessão expirou!");
      this.router.navigate(["/home"]);
    }

    this.idUser = this.route.snapshot.params['id'];
    this.findById(this.idUser);

  }

  findById(id: number) {

    this.authService.getByUser(id).subscribe((resp: UserModel) => {

      this.user = resp;

    });

  }

  confirmePassword(event: any) {

    this.confirmPassword = event.target.value;

  }

  typeUser(event: any) {

    this.typeUsers = event.target.value;

  }

  updateUser(){

    this.user.type = this.typeUsers;

    if(this.user.password != this.confirmPassword){

      this.alerts.showAlertDanger("As senhas precisam ser iguais!");

    }else{

      this.authService.Update(this.user).subscribe((resp:UserModel) =>{

        this.user = resp;
        this.alerts.showAlertInfo("Usuário cadastrado com sucesso! Faça login novamente!");
        environment.token = '';
        environment.name = '';
        environment.photo = '';
        environment.about = ''
        environment.id =0;
        this.router.navigate(['/login']);
      });      

    }

  }

}
