import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { BookingsService } from '../../services/bookings.service';
import { Booking } from '../../services/models';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Booking[];

constructor(
  private bookingService: BookingsService
  ) { }

  ngOnInit(): void {
    this.getBookings()
  }

  hidden = true;

  getBookings(){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-booking", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.bookings = response.data;
        console.log(this.bookings);
        
      })
    .catch((error) => {
     console.log('error ' + error);
      });

  }

  deleteBooking(booking: Booking){
    this.bookings.splice(this.bookings.indexOf(booking), 1);
    this.hidden = !this.hidden;
  }

  // viewUpdatePersonForm(booking: Booking){
  //   this.bookingService.currentIndex = this.bookingService.getBookingIndex(booking);
  //   this.router.navigate(['/update-person']);
  // }

}