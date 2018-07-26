import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

  constructor(private authService: AuthenticationService)  { }

  ngOnInit() {
  }
  isVolunteer(isVolunteer: boolean) {
    this.authService.setIsVolunteer(isVolunteer);
  }
}
