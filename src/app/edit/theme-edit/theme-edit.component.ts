import { AlertsService } from './../../service/alerts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemeService } from './../../service/theme.service';
import { ThemeModel } from './../../Model/ThemeModel';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-theme-edit',
  templateUrl: './theme-edit.component.html',
  styleUrls: ['./theme-edit.component.css']
})
export class ThemeEditComponent implements OnInit {

  themeModel: ThemeModel = new ThemeModel();


  constructor(

    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService

  ) {}

  ngOnInit(){

    window.scroll(0,0);

    if (environment.token == '') {

      this.alerts.showAlertInfo("Sua sessão expirou!");
      this.router.navigate(["/home"]);
    }

    let id = this.route.snapshot.params['id'];
    this.findByIdTheme(id);

  }

  findByIdTheme(id: number){

    this.themeService.getByIdTheme(id).subscribe((resp: ThemeModel) =>{

      this.themeModel = resp;

    });

  }

  updateTheme(){

    this.themeService.putTheme(this.themeModel).subscribe((resp: ThemeModel) =>{

      this.themeModel = resp;
      this.alerts.showAlertSuccess("Tema atualizado com sucesso!");
      this.router.navigate(['/theme']);

    });

  }

}
