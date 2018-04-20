import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-issues-page',
  templateUrl: './change-issues-page.component.html',
  styleUrls: ['./change-issues-page.component.css']
})
export class ChangeIssuesPageComponent implements OnInit {
  fullImagePath;
  isVolunteer: boolean;
  constructor(private authService: AuthenticationService, private router: Router) {
    this.fullImagePath = 'assets/logo1.png';
  }
  ngOnInit() {
    this.isVolunteer = this.authService.isVolunteer;
    console.log(this.isVolunteer);
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
