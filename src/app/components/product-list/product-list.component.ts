import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AppConst } from '../../constants/app-const';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public filterQuery: "";
  public rowsOnPage = 5;

  private selectedProduct: Product;
  private productList: Product[];
  private serverPath = AppConst.serverPath;
  private sortOrder="desc";
  private defaultImageUrl=this.serverPath+"/image/product/noimage.png";





  constructor(
    private productService: ProductService,
    private router: Router,
    private http: Http,
    private route: ActivatedRoute
  ) { }


  onSelect(product: Product) {
    this.selectedProduct = product;
    this.router.navigate(['/productDetail', this.selectedProduct.id]);
  }

  

  ngOnInit() {
    //product list componentinde iki durumda veri listelenir 
    //1. durum istenilen kriterlerde ürün bu durum için query param içerisde if koşulu içindeki kısımlar uygulanır,
    //2. durum tüm ürünlerin listelenmesi bu durum için else içindeki kısımlar uygulanır.
     
    this.route.queryParams.subscribe(params=>{
      if(params['productList']){
        console.log("filtered product list");
        this.productList=JSON.parse(params['productList']);
      }else{
        this.productService.getProductList().subscribe(
          res=>{
            console.log(res.json());
            this.productList=res.json();

          },
          error=>{
            console.log(error)
          }
        );
         
      }
    }
    );
  }

}
