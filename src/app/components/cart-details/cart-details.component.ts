import { Component, OnInit } from '@angular/core';
import { PromoBuku } from 'src/app/common/promoBuku';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  isStock: boolean;
  value: boolean;

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.cartDetails();
    this.isStock = true;
  }

  cartDetails(){
    this.cartItems = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this._cartService.calculateTotalPrice();
  }

  incrementQuantity(cartItem: CartItem){
    this._cartService.addToCart(cartItem);
    if(cartItem.jumlahStok>cartItem.realStock){
//      this.isStock=false;
//    }else{
//      this.isStock=true;
    this.setStock();
    }
  }

  decrementQuantity(cartItem: CartItem){
    this._cartService.decrementQuantity(cartItem);
    if(cartItem.jumlahStok>cartItem.realStock){
//      this.isStock=false;
//    }else{
//      this.isStock=true;
//    }
      this.setStock();
    }
  }

  remove(cartItem: CartItem){
    this._cartService.remove(cartItem);
  }

  setStock(){
    this.isStock = true;
    for(var x in this.cartItems){
      if(this.cartItems[x].jumlahStok > this.cartItems[x].realStock){
          this.isStock = false;
      }
    }
  }


}
