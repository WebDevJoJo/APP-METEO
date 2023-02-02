import { Component, OnInit } from '@angular/core';
import { localityCoordinates } from 'src/model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class homeComponent implements OnInit {
  jsonIn: localityCoordinates = {
    lat: '',
    lng: '',
  };

  featureLocation = {
    loc: 'Turin',
    lat: '45.066667',
    lng: '7.7',
    icon: '',
  };

  defaultCoordinates = [
    {
      loc: 'Turin',
      lat: '45.066667',
      lng: '7.7',
      icon: '',
    },
    {
      loc: 'Milano',
      lat: '45.466944',
      lng: '9.19',
      icon: '',
    },
    {
      loc: 'Roma',
      lat: '41.893056',
      lng: '12.482778',
      icon: '',
    },
    {
      loc: 'Napoli',
      lat: '40.833333',
      lng: '14.25',
      icon: '',
    },
    {
      loc: 'Venezia',
      lat: '45.439722',
      lng: '12.331944',
      icon: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
