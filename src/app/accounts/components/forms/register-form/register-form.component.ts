import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

}
