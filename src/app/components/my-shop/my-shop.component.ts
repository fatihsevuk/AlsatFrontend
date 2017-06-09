import { Component, OnInit } from '@angular/core';
import { Product } from "app/models/product";
import { AppConst } from "app/constants/app-const";
import { ProductService } from '../../services/product.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MyShopService } from "app/services/my-shop.service";
import { User } from "app/models/user";
import { ProductRequest } from "app/models/product-request";
import { QuestionService } from "app/services/question.service";
import { Question } from "app/models/question";
import { Answer } from "app/models/answer";
import { AnswerService } from "app/services/answer.service";
import { SalesService } from "app/services/sales.service";
import { Sales } from "app/models/sales";


@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.css']
})
export class MyShopComponent implements OnInit {

  public filterQuery: "";
  public rowsOnPage = 5;

  private selectedProduct: Product;
  private productList: Product[];
  private comingQuestion:Question[];
  private sendingQuestion:Question[];
  private ownerSales:Sales[];
  private customerSales:Sales[];
  private gain:number=0;
  private payment:number=0;
  private profit:number;
  private requestedProductRequestList: ProductRequest[];
  private ownerUser: User = new User();
  private selectedUser:User;
  private customer: string;
  private desiredProductRequestList: ProductRequest[];
  private confirmedSales:Sales=new Sales();
  private serverPath = AppConst.serverPath;
  private sortOrder = "desc";
  private defaultImageUrl = this.serverPath + "/image/product/noimage.png";
  private customerViewed: boolean;
  private viewQuestion:boolean=false;
  private viewAnswer:boolean=false;
  private questionAdded:boolean;
  private questionId:number;
  private question:Question=new Question();
  private answer:Answer=new Answer();
  private selectedQuestion:Question;

  constructor(
    private productService: ProductService,
    private router: Router,
    private http: Http,
    private route: ActivatedRoute,
    private myShopService: MyShopService,
    private questionService: QuestionService,
    private answerService:AnswerService,
    private salesService:SalesService
    
  ) {
    
   }

  onSelect(product: Product) {
    this.selectedProduct = product;
    this.router.navigate(['/productDetail', this.selectedProduct.id]);
  }

  showUserInfo(user: User){
    this.selectedUser = user;
    this.router.navigate(['/user', this.selectedUser.id]);
  }

  confirmSales(productRerquest: ProductRequest,productId:number , customerId:number ){



    this.confirmedSales.customerId=customerId;
    this.confirmedSales.productId=productId;

    console.log(this.confirmedSales);

    this.salesService.addSales(this.confirmedSales).subscribe(
      res=>{
        console.log(res);
        this.removeProductRequest(productRerquest);
        this.getOwnerSales();
        this.getCustomerSales();
      },
      error=>{
        console.log(error);
      }
    );
    
  }

  getOwnerSales(){
    this.salesService.getOwnerSales().subscribe(
      res=>{
        this.ownerSales=res.json();
        this.ownerSales.forEach(element => {
          this.gain+=Number(element.totalCost);
           this.profit=this.gain-this.payment;
        });
      },
      error=>{
        console.log(error);
      }
    );
  }

  getCustomerSales(){
    this.salesService.getCustomerSales().subscribe(
      res=>{
        this.customerSales=res.json();
        this.customerSales.forEach(element => {
          this.payment+=Number(element.totalCost);
           this.profit=this.gain-this.payment;
        });
      },
      error=>{
        console.log(error);
      }
    );
  }

   showAnswers(question: Question) {
    this.selectedQuestion = question;
    this.router.navigate(['/answer', this.selectedQuestion.id]);
  }

   addQuestion(question:Question , id:number) {

    
    this.question.toUserId=id;

    this.questionService.addQuestion(this.question).subscribe(

      res=>{
        this.questionAdded=true;
        
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    );
  }


  getToQuestion(){
    this.questionService.getToQuestion().subscribe(
      res=>{
        console.log(res.json());
        this.comingQuestion=res.json();
      },
      error=>{
        console.log(error);
      }
    );
  }

   getFromQuestion(){
    this.questionService.getFromQuestion().subscribe(
      res=>{
        console.log(res.json());
        this.sendingQuestion=res.json();
      },
      error=>{
        console.log(error);
      }
    );
  }

  removeQuestion(id:number){
    this.removeAnswerByQuestion(id);
    this.questionService.removeQuestion(id).subscribe(
      res=>{
        console.log(res);
        
        this.getFromQuestion();
      },
      error=>{
        console.log(error);
      }

    );
  }

  removeProductRequest(productRerquest: ProductRequest) {
    this.myShopService.removeProductRequest(productRerquest.id).subscribe(
      res => {
        console.log(res.text());
        this.getRequestedProduct();
        this.getCustomerDesiredProduct();
      },
      error => {
        console.log(error);
      }
    );
  }

  getUserProductList() {
    this.myShopService.getUserProductList().subscribe(
      res => {
        console.log(res.json());
        this.productList = res.json();

      },
      error => {
        console.log(error)
      }
    );
  }

  getUserInfo() {
    this.myShopService.getUserInfo().subscribe(
      res => {

        this.ownerUser = res.json();
        console.log("the owner of shop is " + this.ownerUser.username);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCustomerDesiredProduct() {
    this.myShopService.getCustomerDesiredProduct().subscribe(
      res => {

        this.desiredProductRequestList = res.json();

      },
      error => {
        console.log(error);
      }
    );

  }

  getRequestedProduct() {
    this.myShopService.getRequestedProduct().subscribe(
      res => {
        this.requestedProductRequestList = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  addAnswer(answer:Answer,questionId:number){

    this.answer.questionId=questionId;
  
    this.answerService.addAnswer(this.answer).subscribe(
      res=>{
        console.log(res);
        this.getToQuestion();
      },
      error=>{
        console.log(error);
      }
    );



  }

removeAnswer(answerId:number){
  this.answerService.removeAnswer(answerId).subscribe(
    res=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    }
  );
}

removeAnswerByQuestion(questionId:number){
  this.answerService.removeAnswerByQuestion(questionId).subscribe(
    res=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    }
  );
}

  toggleQuestion(){
    this.viewQuestion = !this.viewQuestion ;
  }

   toggleAnswer(id:number){
     
    this.questionId=id;
    this.viewAnswer = !this.viewAnswer ;
  }



  ngOnInit() {

    this.getCustomerDesiredProduct();
    this.getRequestedProduct();
    this.getUserInfo();
    this.getUserProductList();
    this.getToQuestion();
    this.getFromQuestion();
    this.getOwnerSales();
    this.getCustomerSales();
    
   

 



  }

}
