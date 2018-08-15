import { Component, OnInit } from '@angular/core';

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
  selector: 'app-vol-events-mobile-form',
  templateUrl: './vol-events-mobile-form.component.html',
  styleUrls: ['./vol-events-mobile-form.component.css']
})
export class VolEventsMobileFormComponent implements OnInit {
  events: EventElement[] = [];
  constructor() { }

  ngOnInit() {
    const newEvent = new EventElement();
    newEvent.created_by = 'Nicks Camp';
    newEvent.title = 'Nicks Event';
    newEvent.date = '3/5/19';
    newEvent.address = '51 Push Cart Lane';
    newEvent.city = 'Hanover';
    newEvent.state = 'MA';
    newEvent.zip = '02339';
    newEvent.description = 'Alan Lazowski has more than 35 years’ experience as an entrepreneur in a start up to today’s role as the Founder, Chairman and CEO of LAZ Parking, a $1.2 billion parking management company with more than 10,000 employees.\n' +
      'As the Chairman of the National Parking Association, he will advance NPA’s strategic plan focus education, research, technology and advocacy to build strong parking communities in the private and public sector.';
    newEvent.attending = 200;
    newEvent.going = false;
    newEvent.button_text = 'Attend';
    this.events.push(newEvent);
  }
  going(event) {
    event.going = true;
    event.button_text = 'Going';
  }
}
