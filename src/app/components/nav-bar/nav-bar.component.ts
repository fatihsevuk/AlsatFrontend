import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;   
  private toggleText = false;
  private currentUsername:string;

  constructor(private loginService:LoginService , private router:Router) { }
  
  toggleDisplay() {
  	this.loggedIn = !this.loggedIn;
  }
  

  logout(){
      this.loginService.logout().subscribe(
			res => {
        localStorage.removeItem("currentUser");
				location.reload();
			},

			error=>{
				console.log(error);
			}

		);

    this.router.navigate(['/']);
  }
  

  ngOnInit() {
    this.loginService.checkSession().subscribe(
			res => {
        this.currentUsername=localStorage.getItem("currentUser");
				this.loggedIn=true;
			},

			error=>{
				this.loggedIn=false;
			}

		);
  }

}
