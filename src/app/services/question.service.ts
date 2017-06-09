import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product';
import { AppConst } from '../constants/app-const'; import { Question } from "app/models/question";
import { User } from "app/models/user";


@Injectable()
export class QuestionService {

  private serverPath=AppConst.serverPath;

  constructor(private http:Http) { }

  addQuestion(question:Question){

    let url=this.serverPath+"/question/add";
    
    let headers=new Headers({
      'Content-type':'application/json',
      'x-auth-token':localStorage.getItem('xAuthToken')
    });

    return this.http.post(url,JSON.stringify(question),{headers:headers});

   /* A common use of JSON is to exchange data to/from a web server.
    When sending data to a web server, the data has to be a string.
    Convert a JavaScript object into a string with JSON.stringify().*/

  }
  getQuestion(id:number){
    let url = this.serverPath+"/question/question";
  	
    let questionId=id;

  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.post(url, questionId,{headers: tokenHeader});

  }

 getToQuestion(){
    let url = this.serverPath+"/question/toQuestion";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url, {headers: tokenHeader});

  }

 getFromQuestion(){
    let url = this.serverPath+"/question/fromQuestion";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.get(url, {headers: tokenHeader});

  }

  removeQuestion(id:number){
    let url = this.serverPath+"/question/remove";
  	
  	let tokenHeader = new Headers ({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});

  	return this.http.post(url,id, {headers: tokenHeader});
  }


}
