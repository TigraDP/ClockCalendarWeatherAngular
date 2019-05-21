import { Component, OnInit } from '@angular/core';
import { DateService } from '../../date.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {
  public date: Date;
  private isEuDate = true;
  private timer: any;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.getDate();
    this.showDate();
  }

  formatSwitch(): void {
    this.isEuDate = !this.isEuDate;
    this.showDate();
  }

  getDate(): void {
    this.date = this.dateService.getDate();
  }

  showDate(): void {
  clearInterval(this.timer);
  this.timer =  setInterval(this.getDate.bind(this), 60000);
  this.getDate();
  }
}
