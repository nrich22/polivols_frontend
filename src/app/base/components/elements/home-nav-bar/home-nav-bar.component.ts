import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.css']
})
export class HomeNavBarComponent implements OnInit {
  isHome = true;
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url !== '/') {
      this.isHome = false;
    }
  }

}
