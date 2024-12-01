import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  heroImage = {
    src: '/images/home/hero_banner_img.jpg',
    alt: 'Delivery person on a scooter'
  };

  categories = [
    {
      title: 'RESTAURANTS',
      description: 'Find delicious restaurants offering exclusive deals just for you..!',
      image: '/images/home/restaurentPdf.jpg',
      alt: 'Restaurants',
      link: '/hotel-list'
    },
    {
      title: 'GROCERY',
      description: 'Select from the best stores offering great deals on groceries..!',
      image: '/images/home/grocerynew4.jpg',
      alt: 'Grocery',
      link: '/grocery-list'
    },
    {
      title: 'BIKE MAINTENANCE',
      description: 'Exclusive discount on bike maintenance services just for you..!',
      image: '/images/home/maintenance2.jpg',
      alt: 'Maintenance',
      link: '/bike-maintenance'
    }
  ];

}
