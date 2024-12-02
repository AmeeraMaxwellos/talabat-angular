import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestaurentService } from '../../services/restaurent.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule],
  providers: [RestaurentService],
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {


  isModalOpen = false;
  qrCodeImage: string = ''; // Update if QR codes are provided dynamically
  selectedHotelName: string = '';
  selectedHotelDeal: string = '';
  searchTerm: string = '';
  hotelCards: any[] = [];
  filteredHotelCards: any[] = [];

  constructor(private restaurantService: RestaurentService) {}

  ngOnInit() {
    this.fetchRestaurants();
  }

  fetchRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      (response: any) => {
        // Correctly map the restaurant data
        this.hotelCards = response.message.restaurants;
        this.filteredHotelCards = [...this.hotelCards]; // Initialize filtered data
      },
      (error) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }

  // Update filteredHotelCards dynamically when searchTerm changes
  getFilteredHotelCards() {
    return this.hotelCards.filter(
      (card) =>
        card.restaurant_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(card: any) {
    this.qrCodeImage = card.image; // Assuming this is the image to show in QR modal
    this.selectedHotelName = card.restaurant_name;
    this.selectedHotelDeal = this.stripHtml(card.description); // Remove HTML tags
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.qrCodeImage = '';
    this.selectedHotelName = '';
    this.selectedHotelDeal = '';
  }

  // Helper function to strip HTML from description
  private stripHtml(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }


  

  // isModalOpen = false;
  // qrCodeImage: string = '';
  // selectedHotelName: string = '';
  // selectedHotelDeal: string = '';
  // searchTerm: string = '';
  // hotelCards: any[] = [];
  // filteredHotelCards: any[] = [];

  // constructor(private restaurantService: RestaurentService) {}

  // ngOnInit() {
  //   this.fetchRestaurants();
  // }

  // fetchRestaurants() {
  //   this.restaurantService.getAllRestaurants().subscribe(
  //     (response) => {
  //       this.hotelCards = response.data; 
  //       this.filteredHotelCards = this.hotelCards; 
  //     },
  //     (error) => {
  //       console.error('Error fetching restaurant data:', error);
  //     }
  //   );
  // }

  // getFilteredHotelCards() {
  //   return this.hotelCards.filter((card) =>
  //     card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     card.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  // openModal(card: any) {
  //   this.qrCodeImage = card.qrCode;
  //   this.selectedHotelName = card.restaurant_name;
  //   this.selectedHotelDeal = card.description;
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  //   this.qrCodeImage = '';
  //   this.selectedHotelName = '';
  //   this.selectedHotelDeal = '';
  // }


  // isModalOpen = false;
  // qrCodeImage: string = '';
  // selectedHotelName: string = '';
  // selectedHotelDeal: string = '';
  // searchTerm: string = '';

  // hotelCards = [
  //   {
  //     imgSrc: '/images/restaurent/hotel1.png',
  //     title: 'Zaytoon',
  //     description: '20% off on all menu items!',
  //     qrCode: '/images/restaurent/QRCodes/QRCode_1.2.png'
  //   },
  //   {
  //     imgSrc: '/images/restaurent/hotel 2.png',
  //     title: 'Tea Time',
  //     description: '15% off on desserts!',
  //     qrCode: '/images/restaurent/QRCodes/QRCode_2.png'
  //   },
  //   {
  //     imgSrc: '/images/restaurent/hotel 2.png',
  //     title: 'Hot N Cool',
  //     description: 'Buy 1 Get 1 on Meals',
  //     qrCode: '/images/restaurent/QRCodes/QRCode_3.jpeg'
  //   }
  // ];

  // get filteredHotelCards() {
  //   return this.hotelCards.filter(card => 
  //     card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
  //     card.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }

  // openModal(card: any) {
  //   this.qrCodeImage = card.qrCode;
  //   this.selectedHotelName = card.title;
  //   this.selectedHotelDeal = card.description;
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  //   this.qrCodeImage = '';
  //   this.selectedHotelName = '';
  //   this.selectedHotelDeal = '';
  // }
}


