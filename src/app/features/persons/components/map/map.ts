import { Component, input, AfterViewInit, effect } from '@angular/core';
import * as L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;

type Marker = {
  latitude: number;
  longitude: number;
  total: number;
};

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/media/marker-icon-2x.png',
  iconUrl: '/media/marker-icon.png',
  shadowUrl: '/media/marker-shadow.png',
});

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements AfterViewInit {
  markers = input<Marker[]>([]);
  map: L.Map | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  initMap(): void {
    this.map = L.map('map').setView([50, 0], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  addMarkers(): void {
    this.markers().forEach(({ latitude, longitude, total }: Marker) => {
      const radius = 5 + total * 2;

      if (this.map) {
        L.circleMarker([latitude, longitude], {
          radius,
          color: '#2563eb',
          fillColor: '#3b82f6',
          fillOpacity: 0.6,
        })
          .bindPopup(`${total} ville${total > 1 ? 's' : ''}`)
          .addTo(this.map);
      }
    });
  }
}
