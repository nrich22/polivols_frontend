import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  fullImagePath: string;

  constructor(
    private authService: AuthenticationService) {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
  }
  isVolunteer(isVolunteer: boolean){
    this.authService.setIsVolunteer(isVolunteer);
  }

}
