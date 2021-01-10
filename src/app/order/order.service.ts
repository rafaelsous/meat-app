import { Injectable } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) { }

  cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQtd(item: CartItem): void {
    return this.shoppingCartService.increaseQtd(item);
  }

  decreaseQtd(item: CartItem) {
    return this.shoppingCartService.decreaseQtd(item);
  }

  remove(item: CartItem) {
    return this.shoppingCartService.removeItem(item);
  }

}
