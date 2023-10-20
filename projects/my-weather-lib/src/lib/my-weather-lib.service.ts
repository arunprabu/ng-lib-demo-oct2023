import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyWeatherLibService {
  REST_API_URL =
    'https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=0d0a354784e8166b7b9fee6a3a29bcc2';
  
  constructor(private http: HttpClient) {}

  getWeatherUpdates() {
    return this.http.get(this.REST_API_URL);
  }
}
