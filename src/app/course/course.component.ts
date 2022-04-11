import { AlertsService } from './../service/alerts.service';
import { AuthService } from './../service/auth.service';
import { ThemeService } from './../service/theme.service';
import { PostService } from './../service/post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

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
