import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorHandler } from 'app/app.error-handler';
import { Restaurant } from 'app/restaurants/restaurant/resturant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurant(this.route.snapshot.params['id'])
      .subscribe((restaurant: Restaurant) => this.restaurant = restaurant
      , error => ErrorHandler.errorHandler(error));
  }

}
