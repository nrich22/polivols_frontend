import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  fullImagePath: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
    this.authService.setIsVolunteer(true);
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
