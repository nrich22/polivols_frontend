import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-tos-mobile-form',
  templateUrl: './tos-mobile-form.component.html',
  styleUrls: ['./tos-mobile-form.component.css']
})
export class TosMobileFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TosMobileFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
