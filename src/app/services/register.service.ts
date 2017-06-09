import { Injectable } from '@angular/core';
import { Http ,Headers} from "@angular/http";
import { User } from "app/models/user";
import {AppConst} from '../constants/app-const';


@Injectable()
export class RegisterService {

	private serverPath=AppConst.serverPath;


  constructor(private http:Http) { }

  registerUser(user:User){

    let url=this.serverPath+"/user/register";

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
    });

    return this.http.post(url,JSON.stringify(user),{headers:tokenHeader});

  }




}
