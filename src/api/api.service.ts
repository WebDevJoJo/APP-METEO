import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { phaseOfSun, weatherHour } from 'src/model/model';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  constructor(private httpClient: HttpClient) {}

  apiWeatherUTC = (latitude: string, longitude: string) => {
    return this.httpClient
      .get(
        `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&timezone=UTC&date=today`
      )
      .pipe(
        map((res: any) => {
          const phaseOfSun: phaseOfSun = res.results;
          return phaseOfSun;
        })
      );
  };

  apiWeatherForecast = (latitude: string, longitude: string) => {
    return this.httpClient
      .get(
        `https://www.7timer.info/bin/astro.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=0`
      )
      .pipe(
        map((res: any) => {
          const weather: weatherHour[] = res.dataseries;
          return weather;
        })
      );
  };
}
