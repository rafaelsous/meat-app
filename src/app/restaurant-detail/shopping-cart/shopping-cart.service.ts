import { IMenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: IMenuItem) {
    const foundItem = this.items.find(cartItem => cartItem.menuItem.id === item.id);

    if (foundItem) {
      this.increaseQtd(foundItem)
    } else {
      this.items.push(new CartItem(item));
    }
  }

  increaseQtd(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  decreaseQtd(item: CartItem) {
    item.quantity = item.quantity - 1;

    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, next) => prev + next, 0);
  }

}
