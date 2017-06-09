import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { AppConst } from '../constants/app-const'; import { Question } from "app/models/question";
import { User } from "app/models/user";
import { Answer } from "app/models/answer";


@Injectable()
export class AnswerService {

  private serverPath = AppConst.serverPath;

  constructor(private http: Http) { }

  addAnswer(answer: Answer) {

    let url = this.serverPath + "/answer/add";

    let headers = new Headers({
      'Content-type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(answer), { headers: headers });


  }

  getAnswers(id: number) {
    let url = this.serverPath + "/answer/answers";

    let questionId = id;

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem("xAuthToken")
    });

    return this.http.post(url, questionId, { headers: tokenHeader });

  }

  
  removeAnswerByQuestion(questionId: number) {
    let url = this.serverPath + "/answer/removeByQuuestion";

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url,questionId, { headers: tokenHeader });

  }

  removeAnswer(answerId: number) {
    let url = this.serverPath + "/answer/remove";

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url,answerId, { headers: tokenHeader });

  }


}
