import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-camp-profile-page',
  templateUrl: './camp-profile-page.component.html',
  styleUrls: ['./camp-profile-page.component.css']
})

export class CampProfilePageComponent implements OnInit {
  fullImagePath: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

}
