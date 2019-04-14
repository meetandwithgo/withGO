import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { EventService } from '../event.service';
import { Event } from 'src/model/event';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.eventService.getEvent(param.id).subscribe(resp => {
        this.event = resp;
      }, error => {
        this.router.navigate(['/not-found']);
      });
    })
  }

}
