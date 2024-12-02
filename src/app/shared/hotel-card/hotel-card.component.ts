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
  qrCodeImage: string = '';
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

  // Updates the filtered list whenever searchTerm changes
  onSearchTermChange() {
    this.filteredHotelCards = this.hotelCards.filter(
      (card) =>
        card.restaurant_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(card: any) {
    this.qrCodeImage = card.qr_image;
    this.selectedHotelName = card.restaurant_name;
    // this.selectedHotelDeal = this.stripHtml(card.description);
    this.selectedHotelDeal = card.discount_percentage;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.qrCodeImage = '';
    this.selectedHotelName = '';
    this.selectedHotelDeal = '';
  }

  // Helper function to strip HTML tags
  private stripHtml(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }


}


