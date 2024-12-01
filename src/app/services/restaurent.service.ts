import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {


    private readonly BASE_URL = 'https://talabat.maxwellos.com/api/method/talabat.api.restaurant.get_restaurant_list';

    constructor(private http: HttpClient) { }
  
    getAllRestaurants() :Observable<any> {

      return this.http.get(this.BASE_URL)

    }
   

}
