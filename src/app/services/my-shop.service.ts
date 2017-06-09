import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConst} from '../constants/app-const';

@Injectable()
export class MyShopService {

  private serverPath=AppConst.serverPath;

  constructor(private http:Http) { }

  getUserProductList(){
    let url = this.serverPath+"/shop/productList";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url, {headers: tokenHeader});

  }

	getRequestedProduct(){
		let url = this.serverPath+"/shop/requestedProducts";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url, {headers: tokenHeader});

	}


	getCustomerDesiredProduct(){
		let url = this.serverPath+"/shop/desiredProducts";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url, {headers: tokenHeader});
	}

	removeProductRequest(id:number){
		let url = this.serverPath+"/shop/removeProductRequest";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.post(url,id, {headers: tokenHeader});
	}


  getUserInfo(){
    let url = this.serverPath+"/shop/user";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url, {headers: tokenHeader});

  }

  }





