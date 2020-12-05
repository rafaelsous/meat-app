import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { MEAT_API } from "app/app.api";

import { Restaurant } from "./restaurant/resturant.model";

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`);
  }

  restaurant(restaurantId: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${restaurantId}`);
  }
}
