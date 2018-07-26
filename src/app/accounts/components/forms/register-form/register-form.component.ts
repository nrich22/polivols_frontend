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
  submitted;
  respError;
  requiredEmail = false;
  requiredPassword = false;
  requiredZipCode = false;
  requiredState = false;
  isLinear = false;
  isVolunteer = true;
  dateObj = new Date();
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
    {value: 'C', viewValue: 'Canvassing'}
  ];
  orgs = [
    {value: 'P', viewValue: 'Planned Parenthood'},
    {value: 'N', viewValue: 'NAACP'},
    {value: 'R', viewValue: 'NRA'}
  ];
  levels = [
    {value: 'L', viewValue: 'Local'},
    {value: 'S', viewValue: 'State'},
    {value: 'F', viewValue: 'Federal'}
  ];
  states = [
    {value: 'AL', viewValue: 'Alabama'},
    {value: 'AK', viewValue: 'Alaska'},
    {value: 'AZ', viewValue: 'Arizona'},
    {value: 'AR', viewValue: 'Arkansas'},
    {value: 'CA', viewValue: 'California'},
    {value: 'CO', viewValue: 'Colorado'},
    {value: 'CT', viewValue: 'Connecticut'},
    {value: 'DE', viewValue: 'Delaware'},
    {value: 'FL', viewValue: 'Florida'},
    {value: 'GA', viewValue: 'Georgia'},
    {value: 'HI', viewValue: 'Hawaii'},
    {value: 'ID', viewValue: 'Idaho'},
    {value: 'IL', viewValue: 'Illinois'},
    {value: 'IN', viewValue: 'Indiana'},
    {value: 'IA', viewValue: 'Iowa'},
    {value: 'KS', viewValue: 'Kansas'},
    {value: 'KY', viewValue: 'Kentucky'},
    {value: 'LA', viewValue: 'Louisiana'},
    {value: 'ME', viewValue: 'Maine'},
    {value: 'MD', viewValue: 'Maryland'},
    {value: 'MA', viewValue: 'Massachusetts'},
    {value: 'MI', viewValue: 'Michigan'},
    {value: 'MN', viewValue: 'Minnesota'},
    {value: 'MS', viewValue: 'Mississippi'},
    {value: 'MO', viewValue: 'Missouri'},
    {value: 'MT', viewValue: 'Montana'},
    {value: 'NE', viewValue: 'Nebraska'},
    {value: 'NV', viewValue: 'Nevada'},
    {value: 'NH', viewValue: 'New Hampshire'},
    {value: 'NJ', viewValue: 'New Jersey'},
    {value: 'NM', viewValue: 'New Mexico'},
    {value: 'NY', viewValue: 'New York'},
    {value: 'NC', viewValue: 'North Carolina'},
    {value: 'ND', viewValue: 'North Dakota'},
    {value: 'OH', viewValue: 'Ohio'},
    {value: 'OK', viewValue: 'Oklahoma'},
    {value: 'OR', viewValue: 'Oregon'},
    {value: 'PA', viewValue: 'Pennsylvania'},
    {value: 'RI', viewValue: 'Rhode Island'},
    {value: 'SC', viewValue: 'South Carolina'},
    {value: 'SD', viewValue: 'South Dakota'},
    {value: 'TN', viewValue: 'Tennessee'},
    {value: 'TX', viewValue: 'Texas'},
    {value: 'UT', viewValue: 'Utah'},
    {value: 'VT', viewValue: 'Vermont'},
    {value: 'VA', viewValue: 'Virginia'},
    {value: 'WA', viewValue: 'Washington'},
    {value: 'WV', viewValue: 'West Virginia'},
    {value: 'WI', viewValue: 'Wisconsin'},
    {value: 'WY', viewValue: 'Wyoming'},
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
      camp_name: new FormControl('', []),
      dob: new FormControl('', [
        Validators.required
      ]),
      phone_num: new FormControl('', [])
    });
  }

  register() {
    this.submitted = true;
    this.authService.register(this.form.getRawValue(), this.isVolunteer)
      .switchMap(result => this.authService.login(this.form.get('email').value, this.form.get('password').value))
      .subscribe(result => {
        this.router.navigate(['/issues']);
      },
        error => {
          this.respError = error.error;
          if (this.respError.email) {
            this.requiredEmail = true;
          }
          if (this.respError.password) {
            this.requiredPassword = true;
          }
          if (this.respError.zip_code) {
            this.requiredZipCode = true;
          }
          if (this.respError.state) {
            this.requiredState = true;
          }
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
