import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeatherLibComponent } from './my-weather-lib.component';

describe('MyWeatherLibComponent', () => {
  let component: MyWeatherLibComponent;
  let fixture: ComponentFixture<MyWeatherLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWeatherLibComponent]
    });
    fixture = TestBed.createComponent(MyWeatherLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
