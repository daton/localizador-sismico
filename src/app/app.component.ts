import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxMapComponent } from 'devextreme-angular';
import { Marker, Service } from './service.service';
import {GeologiaService} from './geologia.service';
import {Sismo} from './sismo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Service, GeologiaService]
})
export class AppComponent implements OnInit {
    sismo :Sismo;
    ngOnInit(): void {
     this.obtenerSismos();

     setTimeout(()=>{
        
         console.log("Hola "+this.sismo.features[0].properties.mag);
        
        },3000);
    
 
    }
    
customMarkerUrl: string;
mapMarkerUrl: string;
markers: Marker[];
sismos=new Sismo();

obtenerSismos(){
return this.servicioSismos.getSismos()
.subscribe(sismo=>this.sismo=sismo)
}

sacar(){
    console.log("Hola "+JSON.stringify(this.sismo.features));
}

constructor(service: Service,private servicioSismos:GeologiaService) {
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
