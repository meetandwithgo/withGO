import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Event, Date, Ticket } from 'src/model/event';
import { Router } from '@angular/router';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';

@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent implements OnInit {
  users: User[];
  form: FormGroup;
  validators = [];

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
    this.validators = [Validators.required, Validators.maxLength(100)]
    this.userService.getUsers().subscribe(resp => {
      this.users = resp;
    });

    this.form = new FormGroup({
      organization: new FormControl('', this.validators),
      title: new FormControl('', this.validators),
      eventDate: new FormControl('', this.validators),
      place: new FormControl('', this.validators),
      thumbnail: new FormControl('', this.validators),
      content: new FormControl('', this.validators),
      ticketName: new FormControl('', this.validators),
      ticketDescription: new FormControl('', this.validators),
      ticketDate: new FormControl('', this.validators),
      price: new FormControl('', this.validators),
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
        this.router.navigate(['../'])
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
      this.router.navigate(['../']);
    })
    // this.uploadInput.emit(uploadEvent);
  }
}
