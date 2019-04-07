import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/model/user';

@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent implements OnInit {
  users: User[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(resp => {
      this.users = resp;
    })
  }
}
