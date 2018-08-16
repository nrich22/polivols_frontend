import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-tos-form',
  templateUrl: './tos-form.component.html',
  styleUrls: ['./tos-form.component.css']
})
export class TosFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('Terms of Use');
  }

}
