import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {MatchesService} from '../../../../matches/services/matches.service';
import {EmailService} from '../../../services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent implements OnInit {
  form: FormGroup;
  emailTo: string;
  constructor(
    private matchService: MatchesService,
    public dialogRef: MatDialogRef<EmailFormComponent>,
    public emailService: EmailService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.emailTo = this.emailService.emailTo;
  }
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
