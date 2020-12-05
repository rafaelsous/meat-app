import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorHandler } from 'app/app.error-handler';
import { IRestaurant } from 'app/restaurants/restaurant/resturant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: IRestaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurant(this.route.snapshot.params['id'])
      .subscribe((restaurant: IRestaurant) => this.restaurant = restaurant
      , error => ErrorHandler.errorHandler(error));
  }

}
