import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { phaseOfSun, weatherHour } from 'src/model/model';
import { apiService } from 'src/api/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class weatherComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: apiService) {}

  latitude2: string = this.route.snapshot.paramMap.get('latitude')!;
  longitude2: string = this.route.snapshot.paramMap.get('longitude')!;

  sunPhase: phaseOfSun = { sunrise: '', sunset: '' };
  weather: weatherHour[] = [];

  ngOnInit(): void {
    const lat: string = this.route.snapshot.paramMap.get('latitude')!;
    const lng: string = this.route.snapshot.paramMap.get('longitude')!;

    this.apiService.apiWeatherUTC(latitude, longitude).subscribe((res: any) => {
      this.sunPhase = res;
    });

    this.apiService
      .apiWeatherForecast(latitude, longitude)
      .subscribe((res: any) => {
        this.weather = res;
      });
  }
}
