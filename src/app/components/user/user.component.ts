import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AppConst } from '../../constants/app-const';
import { User } from "app/models/user";
import { UserInfoService } from "app/services/user-info.service";
import { UserInfo } from "app/models/user-info";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userId:number;
  private userInfo:UserInfo=new UserInfo();

  constructor(
    private router: Router,
    private http: Http,
    private route: ActivatedRoute,
    private userInfoService:UserInfoService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.userId = Number.parseInt(params['id']);
    });

    this.userInfoService.getUserInfo(this.userId).subscribe(
      res=>{
        this.userInfo=res.json();
      },
      error=>{
        console.log(error);
      }
    );


  }

}
