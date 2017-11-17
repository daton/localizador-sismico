import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapComponent } from 'devextreme-angular';
import { MapSetting, Service } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service]
})
export class AppComponent {
  mapTypes: MapSetting[];
  mapProviders: MapSetting[];  

  constructor(service: Service) {
    this.mapTypes = service.getMapTypes();
    this.mapProviders = service.getMapProviders();
  }
}
