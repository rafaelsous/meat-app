import { Component, Input, OnInit } from '@angular/core';

import { IRestaurant } from './resturant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: IRestaurant;

  constructor() { }

  ngOnInit() {
  }

}
