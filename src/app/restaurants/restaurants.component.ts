import { Component, OnInit } from '@angular/core';

import { IRestaurant } from './restaurant/resturant.model';
import { RestaurantsService } from './restaurants.service';
import { ErrorHandler } from '../../app/app.error-handler';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: IRestaurant[];

  constructor(
    private restaurantsService: RestaurantsService,
    ) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe((restaurants: IRestaurant[]) => this.restaurants = restaurants
      , error => ErrorHandler.errorHandler(error));
  }

}
