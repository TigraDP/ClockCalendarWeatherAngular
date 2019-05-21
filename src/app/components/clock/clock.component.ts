import { Component, OnInit } from '@angular/core';
import { DateService } from '../../date.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit {
  public date: Date;
  private isShortFormat = true;
  private timer: any;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.getTime();
    this.showTime();
  }

  formatSwitch(): void {
    this.isShortFormat = !this.isShortFormat;
    this.showTime();
}

connectedCallback(): void {
    this.showTime();
}

getTime(): void {
    this.date = this.dateService.getDate();
}

showTime(): void {
    clearInterval(this.timer);
    this.timer = setInterval(this.getTime.bind(this), 1000);
    this.getTime();
  }
}
