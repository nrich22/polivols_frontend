import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
