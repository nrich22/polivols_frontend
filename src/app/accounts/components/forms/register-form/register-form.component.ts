import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  isLinear = false;
  isVolunteer = true;
  parties = [
    {value: 'D', viewValue: 'Democratic'},
    {value: 'R', viewValue: 'Republican'},
    {value: 'G', viewValue: 'Green'},
    {value: 'L', viewValue: 'Libertarian'},
    {value: 'I', viewValue: 'Independent'}
  ];
  levels = [
    {value: 'L', viewValue: 'Local'},
    {value: 'S', viewValue: 'State'},
    {value: 'F', viewValue: 'Federal'}
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      first_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      zip_code: new FormControl('', []),
      state: new FormControl('', [
        Validators.required
      ]),
      hrs_per_week: new FormControl('', [
        Validators.required,
        Validators.max(50),
        Validators.min(1)
      ]),
      party: new FormControl('', []),
      level: new FormControl('', []),
      num_vols: new FormControl('', []),
      link: new FormControl('', [])
    });
  }

  register() {
    this.authService.register(this.form.getRawValue(), this.isVolunteer)
      .subscribe(result => {
        this.router.navigate(['/login']);
      });
  }

  changeType() {
    this.isVolunteer = !this.isVolunteer;
  }

  get first_name() {
    return this.form.get('first_name');
  }

  get last_name() {
    return this.form.get('last_name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get zip_code() {
    return this.form.get('zip_code');
  }

  get state() {
    return this.form.get('state');
  }

  get hrs_per_week() {
    return this.form.get('hrs_per_week');
  }

  get party() {
    return this.form.get('party');
  }

  get level() {
    return this.form.get('level');
  }

  get vols() {
    return this.form.get('num_vols');
  }

  get link() {
    return this.form.get('link');
  }
}
