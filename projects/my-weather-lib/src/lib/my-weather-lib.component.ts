import { Component, OnInit } from '@angular/core';
import { MyWeatherLibService } from './my-weather-lib.service';

@Component({
  selector: 'mwl-my-weather-lib',
  template: `
    <div>
      <h1>Welcome to my-weather-lib!</h1>
      <p>Weather In: {{ weather?.name}}</p>
      <p>Temperature: {{weather?.main.temp}}</p>
    </div>
  `,
  styles: [],
})
export class MyWeatherLibComponent implements OnInit {
  weather: any;

  constructor(private myWeatherLibService: MyWeatherLibService) {}

  ngOnInit(): void {
    this.myWeatherLibService.getWeatherUpdates().subscribe((data) => {
      console.log(data);
      this.weather = data;
    });
  }
}
