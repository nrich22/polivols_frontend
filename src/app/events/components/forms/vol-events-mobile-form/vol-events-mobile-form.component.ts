import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../../services/events.service';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';

export class EventElement {
  id: number;
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
  selector: 'app-vol-events-mobile-form',
  templateUrl: './vol-events-mobile-form.component.html',
  styleUrls: ['./vol-events-mobile-form.component.css']
})
export class VolEventsMobileFormComponent implements OnInit {
  events: EventElement[] = [];
  currEvents: number;
  constructor(
    public authService: AuthenticationService,
    public eventService: EventsService) { }

  ngOnInit() {
    this.eventService.findEvents()
      .subscribe((campEvents: any[]) => {
        this.currEvents = campEvents.length;
        console.log(campEvents);
        for (const event of campEvents) {
          this.events.push({
            id: event.id,
            created_by: event.created_by.camp_name,
            title: event.title,
            date: event.date,
            address: event.address,
            city: event.city,
            state: event.state,
            zip: event.zip_code,
            description: event.description,
            attending: event.attending.length,
            going: this.isButtonDisabled(event),
            button_text: this.isGoing(event)
          });
        }
      });
  }
  going(event) {
    event.going = true;
    event.button_text = 'Going';
    this.eventService.updateEvent(event.id).subscribe();
  }
  isGoing(event) {
    const user = this.authService.currentUser();
    for (const vol of event.attending) {
      if (vol.id === user.user_id) {
        return 'Going';
      }
    }
    return 'Attend';
  }
  isButtonDisabled(event) {
    const user = this.authService.currentUser();
    for (const vol of event.attending) {
      if (vol.id === user.user_id) {
        return true;
      }
    }
    return false;
  }
}
