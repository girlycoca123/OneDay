import { Component, OnInit } from '@angular/core';
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
    document.getElementById('spinner').style.display = "block";
    this.bookingService.getBookings().subscribe(bookings => {
      this.bookings = bookings as Booking[];
      document.getElementById('spinner').style.display = "none";
      console.log(bookings);
    })
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