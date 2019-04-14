import { Component, OnInit } from '@angular/core';
import { Event } from 'src/models/event';
import { Router } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel/';
import { EventService } from '../services/event.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: false } }
  ]
})
export class HomeComponent implements OnInit {
  carouselEvents: Event[];
  events: Event[];

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    this.eventService.getEvents(1, 3).subscribe(resp => {
      this.carouselEvents = resp;
    })
    this.getEventList(1, 10);
  }

  private getEventList(page: number, count: number) {
    this.eventService.getEvents(page, count).subscribe(resp => {
      this.events = resp;
    });
  }

  paginate(event) {
    this.getEventList(event.page, event.rows);
  }

  goToDetail(event: Event) {
    this.router.navigate([`../event-detail/${event.id}`])
  }
}
