import { Component } from '@angular/core';
import { HotelCardComponent } from '../hotel-card/hotel-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  imports: [HotelCardComponent, RouterLink],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {


  heroImage = {
    // src: '/images/restaurent/restaurentbanner2.jpg',
      // src: '/images/restaurent/restaurentbannertest.jpeg',
    src: '/images/home/hero_banner_img.jpg',
    alt: 'Delivery person on a scooter'
  };

 
}
