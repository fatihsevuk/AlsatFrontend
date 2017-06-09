import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConst} from '../constants/app-const';

@Injectable()
export class UserInfoService {

  private serverPath=AppConst.serverPath;
  
  constructor(private http: Http) { }

  getUserInfo(id:number){

  let url = this.serverPath+"/userInfo/"+id;
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

    	return this.http.get(url, {headers: tokenHeader});

  }


}
