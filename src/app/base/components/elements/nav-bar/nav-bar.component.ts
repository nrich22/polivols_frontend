import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  isVolunteer: boolean;
  constructor(private authService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
    this.isVolunteer = this.authService.isVolunteer;
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
