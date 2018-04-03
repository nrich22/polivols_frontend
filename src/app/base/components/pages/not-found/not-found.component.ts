import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
  }

}
