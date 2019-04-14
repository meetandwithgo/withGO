import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  static validators = [Validators.required, Validators.maxLength(100)];

  constructor() { }


}
