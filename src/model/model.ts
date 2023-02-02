export interface Data {
  phaseOfSun: phaseOfSun;
  weatherForecast: weatherHour[];
}

export interface phaseOfSun {
  sunrise: string;
  sunset: string;
}

export interface weatherHour {
  timepoint: number;
  temp2m: number;
  prec_type: string;
}

export interface localityCoordinates {
  longitude: any;
  latitude: any;
  lat: string;
  lng: string;
}
