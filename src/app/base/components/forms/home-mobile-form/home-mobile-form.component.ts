import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';

@Component({
  selector: 'app-home-mobile-form',
  templateUrl: './home-mobile-form.component.html',
  styleUrls: ['./home-mobile-form.component.css']
})
export class HomeMobileFormComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  isVolunteer(isVolunteer: boolean) {
    this.authService.setIsVolunteer(isVolunteer);
  }
}
