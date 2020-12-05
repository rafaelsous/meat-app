import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { MEAT_API } from "app/app.api";

import { IRestaurant } from "./restaurant/resturant.model";
import { IMenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) {}

  restaurants(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>(`${MEAT_API}/restaurants`);
  }

  restaurant(restaurantId: string): Observable<IRestaurant> {
    return this.http.get<IRestaurant>(`${MEAT_API}/restaurants/${restaurantId}`);
  }

  reviewsOfRestaurant(restaurantId: string): Observable<any> {
    return this.http.get<any>(`${MEAT_API}/restaurants/${restaurantId}/reviews`);
  }

  menusOfRestaurant(restaurantId: string): Observable<IMenuItem[]> {
    return this.http.get<any>(`${MEAT_API}/restaurants/${restaurantId}/menu`);
  }
}
