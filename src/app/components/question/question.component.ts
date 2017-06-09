import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { QuestionService } from "app/services/question.service";
import { Question } from "app/models/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private question: Question = new Question();





  constructor(private questionService: QuestionService, private router: Router) { }

  addQuestion() {

    this.question.question="deneme sorusu 1";
    this.question.toUserId=3;

    this.questionService.addQuestion(this.question).subscribe(

      res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
