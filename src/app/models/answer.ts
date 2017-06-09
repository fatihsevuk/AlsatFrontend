
import { Question } from "app/models/question";

export class Answer {

    id:number;
    answer:string;
    toUsername:string;
    toUserId:number;
    questionId:number;

}