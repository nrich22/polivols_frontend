import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  fullImagePath;
  form: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router) {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  submit() {
    this.authService
      .login(this.form.get('email').value, this.form.get('password').value)
      .subscribe(token => {
        if (this.authService.currentUser().is_campaign) {
          this.authService.setIsVolunteer(false);
          this.router.navigate(['/camp_profile']);
        } else {
          this.authService.setIsVolunteer(true);
          this.router.navigate(['/profile']);
        }
      });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
