import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EventsService} from '../../../services/events.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';

@Component({
  selector: 'app-create-events-mobile-form',
  templateUrl: './create-events-mobile-form.component.html',
  styleUrls: ['./create-events-mobile-form.component.css']
})
export class CreateEventsMobileFormComponent implements OnInit {
  form: FormGroup;
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
    private eventService: EventsService,
    private router: Router,
    public dialogRef: MatDialogRef<CreateEventsMobileFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)  {
  }
  ngOnInit() {
    this.form = this._formBuilder.group({
      created_by: new FormControl(),
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(80),
      ]),
      state: new FormControl('', [
        Validators.required,
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(80),
      ]),
      zip: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.maxLength(80),
      ]),
    });
  }
  create() {
    this.eventService.createEvent(this.form.getRawValue()).subscribe();
    this.dialogRef.close();
  }
}
