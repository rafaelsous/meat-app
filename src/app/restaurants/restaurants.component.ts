import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/resturant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe((restaurants: Restaurant[]) => this.restaurants = restaurants);
  }

}
