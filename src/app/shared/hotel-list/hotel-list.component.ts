import { Component } from '@angular/core';
import { HotelCardComponent } from '../hotel-card/hotel-card.component';
import { RouterLink } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HotelCardComponent, RouterLink],
  // providers: [HttpClient],
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
