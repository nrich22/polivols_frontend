import { Component, OnInit } from '@angular/core';
import {MatCard, MatDialog} from '@angular/material';
import {CreateEventsFormComponent} from '../create-events-form/create-events-form.component';
import {CreateEventsMobileFormComponent} from '../create-events-mobile-form/create-events-mobile-form.component';

export class EventElement {
  created_by: string;
  title: string;
  date: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  attending: number;
}

@Component({
  selector: 'app-camp-events-mobile-form',
  templateUrl: './camp-events-mobile-form.component.html',
  styleUrls: ['./camp-events-mobile-form.component.css']
})
export class CampEventsMobileFormComponent implements OnInit {
  events: EventElement[] = [];
  title: string;
  state: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const newEvent = new EventElement();
    newEvent.created_by = 'Nicks Camp';
    newEvent.title = 'Nicks Event';
    newEvent.date = '3/5/19';
    newEvent.address = '51 Push Cart Lane';
    newEvent.city = 'Hanover';
    newEvent.state = 'MA';
    newEvent.zip = '02339';
    newEvent.description = 'THIS WILL BE A GREAT EVENT';
    newEvent.attending = 200;
    this.events.push(newEvent);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateEventsMobileFormComponent, {
      width: '95%',
      data: {title: this.title, state: this.state}
    });
  }
}
