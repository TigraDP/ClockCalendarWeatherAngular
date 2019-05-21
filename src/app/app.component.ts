import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public clock = true;
  public calendar = false;
  public weather = false;

  switch(event: Event): void {
    event.preventDefault();
    if (this.clock) {
      this.clock = !this.clock;
      this.calendar = true;
    } else if (this.calendar) {
      this.calendar = !this.calendar;
      this.weather = true;
    } else if (this.weather) {
    this.weather = !this.weather;
    this.clock = !this.clock;
  }
  }
}
