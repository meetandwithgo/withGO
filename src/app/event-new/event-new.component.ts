import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from 'src/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { Event, Date, Ticket } from 'src/models/event';
import { Router } from '@angular/router';
import { UploadOutput, UploadInput, UploadFile, UploaderOptions } from 'ngx-uploader';
import { UserService } from '../services/user.service';
import { EventService } from '../services/event.service';
import { FormService } from '../services/form.service';

@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent implements OnInit {
  users: User[];
  form: FormGroup;

  isFile = false;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  dragOver: boolean;
  options: UploaderOptions;

  constructor(
    private userService: UserService,
    private eventService: EventService,
    private router: Router
  ) {
    this.options = { concurrency: 1, maxUploads: 1 };
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(resp => {
      this.users = resp;
    });

    this.form = new FormGroup({
      organization: new FormControl('', FormService.validators),
      title: new FormControl('', FormService.validators),
      eventDate: new FormControl('', FormService.validators),
      place: new FormControl('', FormService.validators),
      thumbnail: new FormControl('', FormService.validators),
      content: new FormControl('', FormService.validators),
      ticketName: new FormControl('', FormService.validators),
      ticketDescription: new FormControl('', FormService.validators),
      ticketDate: new FormControl('', FormService.validators),
      price: new FormControl('', FormService.validators),
    });
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') { }
    else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      this.files.push(output.file);
      this.isFile = true;
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
      this.files.forEach(file => {
        console.log(file.progress.data.percentage)
      })
    } else if (output.type === 'done') {
      this.files.forEach(file => {
        alert(file.response);
        this.router.navigate(['/home'])
      });
    }
  }

  onSubmit(): void {
    const value = this.form.value;
    const ticket = new Ticket(0, value.ticketName, value.ticketDescription,
      new Date(value.ticketDate[0], value.ticketDate[1]), value.place)
    const event = new Event(0, value.organization, value.title, new Date(value.eventDate[0], value.eventDate[1]),
      value.place, value.thumbnail, value.content, [ticket]);
    // const uploadEvent: UploadInput = {
    //   type: 'uploadAll',
    //   url: "http://localhost:3000/events",
    //   method: 'POST',
    //   data: { 'event': JSON.stringify(event) }
    // };
    this.eventService.addEvent(event).subscribe(resp => {
      alert(resp);
      this.router.navigate(['/home']);
    })
    // this.uploadInput.emit(uploadEvent);
  }

  back() {
    this.router.navigate(['/home']);
  }
}
