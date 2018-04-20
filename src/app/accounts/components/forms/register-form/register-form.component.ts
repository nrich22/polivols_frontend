import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  fullImagePath;
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
  types = [
    {value: 'E', viewValue: 'Work Events'},
    {value: 'P', viewValue: 'Make Phone Calls'},
    {value: 'C', viewValue: 'Canvasing'}
  ];
  levels = [
    {value: 'L', viewValue: 'Local'},
    {value: 'S', viewValue: 'State'},
    {value: 'F', viewValue: 'Federal'}
  ];
  states = [
    {value: 'MA', viewValue: 'Massachusetts'},
    {value: 'GA', viewValue: 'Georgia'},
    {value: 'NY', viewValue: 'New York'}
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
    this.isVolunteer = this.authService.isVolunteer;
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
      party: new FormControl('', []),
      level: new FormControl('', []),
      num_vols: new FormControl('', []),
      link: new FormControl('', []),
      type: new FormControl('', []),
      camp_name: new FormControl('', [])
    });
  }

  register() {
    this.authService.register(this.form.getRawValue(), this.isVolunteer)
      .switchMap(result => this.authService.login(this.form.get('email').value, this.form.get('password').value))
      .subscribe(result => {
        this.router.navigate(['/issues']);
      });
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
