import { Injectable } from '@angular/core';

import {Http, Response, Headers} from '@angular/http'
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Estatus} from './estatus';
import {Sismo} from './sismo';


@Injectable()
export class GeologiaService {
  estatus:Estatus;
  miUrl:string='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2017-11-16&endtime=2017-11-17&minlatitude=10&minlongitude=-120&maxlatitude=90&maxlongitude=90';
  private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http) { }
  
    getSismos():Observable<Sismo>{
   return this.http.get(this.miUrl)
     .map((respuesta:Response)=><Sismo >respuesta.json())
    }
  
    getMensaje(id:string):Observable<Sismo>{
      return this.http.get(this.miUrl+'/'+id).
      map((respuesta:Response)=><Sismo>respuesta.json());
    }
  
    guardarMensaje(mensa:Sismo):Observable<Estatus>{
      return this.http.post(this.miUrl, JSON.stringify(mensa),{headers:this.headers}).
      map((respuesta:Response)=><Estatus>respuesta.json());
    }
  
    actualizarMensaje(mensa:Sismo):Observable<Estatus>{
     return this.http.put(this.miUrl, JSON.stringify(mensa),{headers:this.headers})
      .map((respuesta:Response)=><Estatus>respuesta.json());
     
    }
  /* El siguiente  aunque es directo no se recomienda, es mejor obtener el retorno
   de Observable<Estatus> y en la componente inyectar el servicio a través del metodo subscribe(tuObservador).
    actualizarMensaje2(mensa:Mensaje){
     return this.http.put(this.miUrl, JSON.stringify(mensa),{headers:this.headers})
      .map((respuesta:Response)=><Estatus>respuesta.json()).subscribe(estatus=>this.estatus=estatus);
      }
    */
  
    borrarMensaje(id:string):Observable<Estatus>{
      return this.http.delete(this.miUrl+'/'+id)
      .map((respuesta:Response)=><Estatus>respuesta.json())
     
    }
  }