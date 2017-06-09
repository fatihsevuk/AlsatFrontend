
import { User } from "app/models/user";
import { Product } from "app/models/product";

export class ProductRequest {

    id:number;
    customer:User;
    productOwner:number;
    product:Product;


} 