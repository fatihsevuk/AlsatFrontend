import { Component, OnInit, Output } from '@angular/core';
import { Product } from "app/models/product";

import { AddProductService } from "app/services/add-product.service";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { LocationService } from "app/services/location.service";
import { EventEmitter } from "events";
import { UploadImageService } from 'app/services/upload-image.service';
import { LoginService } from "app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  private newProduct: Product = new Product();
  private productAdded: boolean;
  private selectedCityName: string;
  private districts = [];
  private cities = [];
  private citiesFiltered = [];




  constructor(
    private addProductService: AddProductService,
    private locationService: LocationService,
    private uploadImageService: UploadImageService,
    private loginService:LoginService,
    private router:Router) {

     }





  onSubmit() {

    this.newProduct.username = localStorage.getItem("currentUser");
    this.addProductService.sendProduct(this.newProduct).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.productAdded = true;
        this.newProduct = new Product();
        this.newProduct.active = true;
        this.newProduct.category = "Elektronik";
        this.newProduct.productCondition = "new";
      },
      error => {
        console.log(error);
      }
    );
  }

  onChange($event) {

    this.selectedCityName = $event.value;
    this.districts=[];

    this.cities.forEach(city => {
      if (city.il == this.selectedCityName) {
        this.districts.push(city.ilce);
      }
      
    });

    console.log(this.selectedCityName);

  }

  ngOnInit() {

    this.productAdded = false;
    this.newProduct.active = true;
    this.newProduct.category = "Elektronik";
    this.newProduct.productCondition = "new";

    this.locationService.getCity().subscribe(
      res => {

        this.cities = res;
        this.cities.forEach(city => {

          if (this.citiesFiltered.includes(city.il) == false) {

            this.citiesFiltered.push(city.il);


          }



        });

      },
      error => {
        console.log(error);
      }
    );



    this.loginService.checkSession().subscribe(
			res => {
        console.log(res);
			
			},

			error=>{
				this.router.navigate(['/']);
			}

		);



  }


}
