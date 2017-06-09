import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AppConst } from '../../constants/app-const';
import { Question } from "app/models/question";
import { Answer } from "app/models/answer";
import { AnswerService } from "app/services/answer.service";
import { QuestionService } from "app/services/question.service";


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  
  private serverPath = AppConst.serverPath;
  private questionId:number;
  private question:Question=new Question();
  private answerList:Answer[];
 


  constructor( 
    private router: Router,
    private http: Http,
    private route: ActivatedRoute,
    private answerService:AnswerService,
    private questionService:QuestionService) { }





  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.questionId = Number.parseInt(params['id']);
    });

    this.questionService.getQuestion(this.questionId).subscribe(
      res=>{
        console.log(res);
        this.question=res.json();
      },
      error=>{
        console.log(error);
      }
    );

    this.answerService.getAnswers(this.questionId).subscribe(
      res=>{
        console.log(res.json());
        this.answerList=res.json();
      },
      error=>{
        console.log(error);
      }
    );




  }



}
