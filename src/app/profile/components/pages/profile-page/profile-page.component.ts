import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
  }

}
