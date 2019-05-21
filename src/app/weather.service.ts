import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }
  getWeather(city: string, url: string, apiKey: string) {
    return this.http.get(url + city + '&APPID=' + apiKey + '&units=metric');
  }
}

