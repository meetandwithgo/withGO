import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  prefix: string = "http://localhost:3000/users"
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.prefix}`);
  }
}