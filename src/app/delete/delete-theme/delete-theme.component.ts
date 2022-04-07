import { AlertsService } from './../../service/alerts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemeService } from './../../service/theme.service';
import { ThemeModel } from './../../Model/ThemeModel';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-theme',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css']
})
export class DeleteThemeComponent implements OnInit {

  themeModel: ThemeModel = new ThemeModel()
  idTheme: number

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService

  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.idTheme = this.route.snapshot.params['id']
    this.findByIdTheme(this.idTheme)

  }

  findByIdTheme(id: number) {
    this.themeService.getByIdTheme(id).subscribe((resp: ThemeModel) => {
      this.themeModel = resp
    })
  }

  delete() {
    this.themeService.deleteTheme(this.idTheme).subscribe(() => {
      alert('Tema apagado com sucesso!')
      this.router.navigate(['/theme'])
    });
  }

}
