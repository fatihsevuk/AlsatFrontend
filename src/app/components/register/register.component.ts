import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/services/login.service";
import { Router } from "@angular/router";
import { User } from "app/models/user";
import { RegisterService } from "app/services/register.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private loggedIn = false;
  private user: User = new User();

  constructor(private loginService: LoginService, private registerService: RegisterService , private router:Router) { }

  onSubmit() {

    console.log(this.user);


    if(this.user.password==this.user.rePassword){
      this.registerService.registerUser(this.user).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/login']);
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      console.log("girilen parolalar uyuşmuyor");
    }
  

  }


  ngOnInit() {

    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },

      error => {
        this.loggedIn = false;
      }

    );

  }

}
