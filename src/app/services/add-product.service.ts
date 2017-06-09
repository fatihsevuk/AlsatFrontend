import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product';
import {AppConst} from '../constants/app-const';

@Injectable()
export class AddProductService {

  private serverPath=AppConst.serverPath;

  constructor(private http:Http) { }

  sendProduct(product:Product){
    let url=this.serverPath+"/product/add";

    let headers=new Headers({
      'Content-type':'application/json',
      'x-auth-token':localStorage.getItem('xAuthToken')
    });

    return this.http.post(url,JSON.stringify(product),{headers:headers});

   /* A common use of JSON is to exchange data to/from a web server.
    When sending data to a web server, the data has to be a string.
    Convert a JavaScript object into a string with JSON.stringify().*/

  }


}
