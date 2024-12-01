import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-card',
  imports: [NgFor, NgIf, CommonModule, FormsModule],
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent {
  isModalOpen = false;
  qrCodeImage: string = '';
  selectedHotelName: string = '';
  selectedHotelDeal: string = '';
  searchTerm: string = '';

  hotelCards = [
    {
      imgSrc: '/images/restaurent/hotel1.png',
      title: 'Zaytoon',
      description: '20% off on all menu items!',
      qrCode: '/images/restaurent/QRCodes/QRCode_1.2.png'
    },
    {
      imgSrc: '/images/restaurent/hotel 2.png',
      title: 'Tea Time',
      description: '15% off on desserts!',
      qrCode: '/images/restaurent/QRCodes/QRCode_2.png'
    },
    {
      imgSrc: '/images/restaurent/hotel 2.png',
      title: 'Hot N Cool',
      description: 'Buy 1 Get 1 on Meals',
      qrCode: '/images/restaurent/QRCodes/QRCode_3.jpeg'
    }
  ];

  get filteredHotelCards() {
    return this.hotelCards.filter(card => 
      card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      card.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(card: any) {
    this.qrCodeImage = card.qrCode;
    this.selectedHotelName = card.title;
    this.selectedHotelDeal = card.description;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.qrCodeImage = '';
    this.selectedHotelName = '';
    this.selectedHotelDeal = '';
  }
}


