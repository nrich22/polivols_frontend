import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-page',
  templateUrl: './issues-page.component.html',
  styleUrls: ['./issues-page.component.css']
})
export class IssuesPageComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
  }

}
