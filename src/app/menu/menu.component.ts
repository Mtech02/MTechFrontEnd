import { ThemeService } from './../service/theme.service';
import { ThemeModel } from './../Model/ThemeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  theme: ThemeModel = new ThemeModel();

  constructor(

    private themeService: ThemeService

  ) { }

  ngOnInit(): void {
  }

  findByIdTheme(id: number) {

    this.themeService.getByIdTheme(id).subscribe((resp: ThemeModel) => {

      this.theme = resp;

    });

  }

}