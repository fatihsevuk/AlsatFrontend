import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private loggedIn = false;
  constructor(config: NgbCarouselConfig) { 
  config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
