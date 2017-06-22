import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 48.866667;
  lng: number = 2.333333;
  zoom: number = 11;

  constructor() { }

  ngOnInit() {
  }

}
