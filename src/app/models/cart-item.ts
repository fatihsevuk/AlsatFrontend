import { Product } from "app/models/product";
import { ShoppingCart } from "app/models/shopping-cart";

export class CartItem {
    
    public id:number;
    public subtotal:number;
    public product:Product;
    public shoppingCart:ShoppingCart;
    public toUpdate:boolean;
    public qty:number;
}
