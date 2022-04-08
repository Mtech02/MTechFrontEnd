import { ThemeModel } from './../Model/ThemeModel';
import { AlertsService } from './../service/alerts.service';
import { ThemeService } from './../service/theme.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: ThemeModel = new ThemeModel();
  listTheme: ThemeModel[];

  constructor(

    private router: Router,
    private themeService: ThemeService,
    private alerts: AlertsService

  ) { }

  ngOnInit() {

    if (environment.token == '') {

      this.alerts.showAlertInfo("Sua sessão expirou!");
      this.router.navigate(["/home"]);
    }

    window.scroll(0, 0);

    this.findAllTheme();

  }

  findAllTheme(){

    this.themeService.getAllTheme().subscribe((resp: ThemeModel[]) =>{

      this.listTheme = resp;

    })

  }

  registerTheme(){

    this.themeService.postTheme(this.theme).subscribe((resp: ThemeModel) =>{

      this.theme = resp;
      this.alerts.showAlertSuccess("Tema cadastrado com sucesso!");
      this.findAllTheme();
      this.theme = new ThemeModel();

    })

  }

}
