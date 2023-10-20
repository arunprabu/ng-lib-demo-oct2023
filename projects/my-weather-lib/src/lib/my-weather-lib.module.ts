import { NgModule } from '@angular/core';
import { MyWeatherLibComponent } from './my-weather-lib.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyWeatherLibComponent
  ],
  imports: [
    CommonModule, // for data binding
    HttpClientModule // for http calls
  ],
  exports: [
    MyWeatherLibComponent
  ]
})
export class MyWeatherLibModule { }
