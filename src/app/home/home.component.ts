import { Component, OnInit } from '@angular/core';
import { Event, Ticket } from 'src/model/event';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Event[];

  constructor(
    private eventService: EventService,
    private router: Router
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

  goToAddEvent() {
    this.router.navigate(['/event-new'])
  }
}
