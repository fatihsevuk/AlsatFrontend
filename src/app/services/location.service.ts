import { Injectable } from '@angular/core';
import {Http, Headers , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class LocationService {

  private url:string="data/il-ilce.json";
//private url:string="http://services.atiksoftware.com/turkiye/";

  constructor(private http : Http) { }

  getCity(){
    
     return this.http.get(this.url)
                .map((response:Response)=>response.json());

                 
  }

  getDistrict(id:string){
    
     return this.http.get(`${this.url}/${id}`)
                .map((response:Response)=>response.json());

                 
  }




 





}
