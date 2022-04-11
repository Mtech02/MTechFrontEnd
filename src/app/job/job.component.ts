import { AlertsService } from './../service/alerts.service';
import { AuthService } from './../service/auth.service';
import { ThemeService } from './../service/theme.service';
import { PostService } from './../service/post.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(

    private router: Router,
    private postService: PostService,
    private themeService: ThemeService,
    private authService: AuthService,
    private alerts: AlertsService

  ) { }

  ngOnInit() {

    window.scroll(0, 0);

    if (environment.token == '') {

      this.alerts.showAlertInfo("Sua sessão expirou!");
      this.router.navigate(["/home"]);

    }
  }

}
