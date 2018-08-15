import { Component, OnInit } from '@angular/core';
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
  going: boolean;
  button_text: string;
}

@Component({
  selector: 'app-vol-events-form',
  templateUrl: './vol-events-form.component.html',
  styleUrls: ['./vol-events-form.component.css']
})
export class VolEventsFormComponent implements OnInit {
  events: EventElement[] = [];
  currEvents: number;
  constructor(public eventService: EventsService) { }

  ngOnInit() {
    this.eventService.findEvents()
      .subscribe((campEvents: any[]) => {
        this.currEvents = campEvents.length;
        console.log(campEvents);
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
            attending: event.attending.length,
            going: false,
            button_text: 'Attend'
          });
        }
      });
  }
  going(event) {
    event.going = true;
    event.button_text = 'Going';
  }
}
