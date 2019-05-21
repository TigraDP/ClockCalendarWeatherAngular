import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DateService {

  getDate(): Date {
    return new Date();
  }
}
