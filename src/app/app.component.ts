import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapComponent } from 'devextreme-angular';
import { Marker, Service } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service]
})
export class AppComponent {
customMarkerUrl: string;
mapMarkerUrl: string;
markers: Marker[];

constructor(service: Service) {
    this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
    this.markers = service.getMarkers();
}
checkCustomMarker(data) {
    this.mapMarkerUrl = data.value ? this.customMarkerUrl : null;
}
showTooltips() {
    this.markers = this.markers.map(function (item) {
        item.tooltip.isShown = true;
        return item;
    });
}
}
