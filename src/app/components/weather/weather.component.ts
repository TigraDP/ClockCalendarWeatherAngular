import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { WeatherData } from './weatherModel';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {
  public weatherData: WeatherData;
  private weather: any;
  private city: string;
  private url: string;
  private apiKey: string;

  constructor(private weatherSvc: WeatherService) {
    this.city = 'Dnipro';
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.apiKey = '35c8cf54bb1ee3d5c518c6647f325bf4';
   }

  ngOnInit() {
    this.weatherSvc.getWeather(this.city, this.url, this.apiKey).subscribe((response) => {
      this.weather = response;
      this.weatherData = {
        city: this.weather.name,
        temp: this.weather.main.temp,
        clear: this.weather.weather[0].description
      };
    });
  }
}

