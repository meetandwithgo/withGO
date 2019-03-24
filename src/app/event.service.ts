import { Injectable } from '@angular/core';
import { Event } from 'src/model/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  prefix: string = 'http://localhost:3000/events';
  constructor(
    private http: HttpClient
  ) { }

  getEvents(page: number, count: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.prefix}?_page=${page}&_limit=${count}`);
  }

  getTotalEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.prefix}`);
  }
}
