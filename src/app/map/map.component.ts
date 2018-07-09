import { Component, OnInit } from '@angular/core';
import { Title } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string ;
  lat: number  ;
  lng: number ;
  constructor() {
    this.title = "My first AGM project";
    this.lat = 10.752701;
    this.lng = 106.670386;
  }
  ngOnInit() {
    
  }
  OnchooseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
