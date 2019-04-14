import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from 'src/models/event';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../services/form.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss']
})
export class BuyTicketComponent implements OnInit {
  event: Event;
  form: FormGroup;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.getEvent(params.id).subscribe(resp => {
        this.event = resp;
      })
    })
    this.form = new FormGroup({
      ticket: new FormControl('', FormService.validators),
      card: new FormControl('', FormService.validators)
    });
  }

  buyTicket() {
    this.eventService.buyTicket(this.event, this.form.value).subscribe(resp => {
      alert(resp);
      this.router.navigate(['/home']);
    })
  }

  back() {
    this.router.navigate(['event-detail/', this.event.id]);
  }
}
