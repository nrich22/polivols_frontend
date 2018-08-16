import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateEventsFormComponent} from '../create-events-form/create-events-form.component';
import {EventsService} from '../../../services/events.service';

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
  selector: 'app-camp-events-form',
  templateUrl: './camp-events-form.component.html',
  styleUrls: ['./camp-events-form.component.css']
})
export class CampEventsFormComponent implements OnInit {
  events: EventElement[] = [];
  currEvents: number;
  title: string;
  state: string;
  constructor(
    public eventService: EventsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.eventService.getCampEvents()
      .subscribe((campEvents: any[]) => {
        this.currEvents = campEvents.length;
        for (const event of campEvents) {
          this.events.push({
            created_by: event.created_by.camp_name,
            title: event.title,
            date: event.date,
            address: event.address,
            city: event.city,
            state: event.state,
            zip: event.zip_code,
            description: event.description,
            attending: event.attending.length
          });
        }
      });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateEventsFormComponent, {
      width: '95%',
      data: {title: this.title, state: this.state}
    });
  }
}
