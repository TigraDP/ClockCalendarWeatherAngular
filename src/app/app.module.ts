import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './weather.service';
import { DateService } from './date.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    CalendarComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
