import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
  }

}
