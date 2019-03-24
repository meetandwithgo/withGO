import { Component, OnInit } from '@angular/core';
import { Event, Ticket } from 'src/model/event';
import { EventService } from '../event.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEventList(1, 100);
  }

  private getEventList(page: number, count: number) {
    this.eventService.getEvents(page, count).subscribe(resp => {
      this.events = resp;
    });
  }

  paginate(event) {
    this.getEventList(event.page, event.rows);
  }

}
