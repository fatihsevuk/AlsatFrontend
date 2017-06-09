import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { AppConst } from '../constants/app-const'; import { Question } from "app/models/question";
import { Sales } from "app/models/sales";



@Injectable()
export class SalesService {
  private serverPath=AppConst.serverPath;

  constructor(private http:Http) { }

 addSales(sales:Sales){

    let url=this.serverPath+"/sales/add";
    
    
    let headers=new Headers({
      'Content-type':'application/json',
      'x-auth-token':localStorage.getItem('xAuthToken')
    });

    return this.http.post(url,JSON.stringify(sales),{headers:headers});

  

  }



getOwnerSales(){
    let url = this.serverPath+"/sales/sold";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url, {headers: tokenHeader});

  }


  getCustomerSales(){
    let url = this.serverPath+"/sales/got";
  	
    

  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url,{headers: tokenHeader});

  }


}
