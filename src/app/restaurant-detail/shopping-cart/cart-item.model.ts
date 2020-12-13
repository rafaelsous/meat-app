import { IMenuItem } from "../menu-item/menu-item.model";

export class CartItem {
  constructor(
    public menuItem: IMenuItem,
    public quantity: number = 1,
  ) {}

  value(): number {
    return this.menuItem.price * this.quantity;
  }
}
