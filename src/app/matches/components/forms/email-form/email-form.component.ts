import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {MatchesService} from '../../../services/matches.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private matchService: MatchesService,
    public dialogRef: MatDialogRef<EmailFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
    this.form = new FormGroup({
      subject: new FormControl(),
      message: new FormControl()
    });
  }
  sendEmail() {
    this.matchService.sendEmail(this.form.get('subject').value, this.form.get('message').value)
      .subscribe(email => {
        this.dialogRef.close();
      });
  }
}
