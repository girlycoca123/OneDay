import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { BookingsService } from 'src/app/services/bookings.service';
import { Booking } from '../../services/models';

=======
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

<<<<<<< HEAD
  bookings: Booking[];

  constructor(
    private bookingsService: BookingsService,
    private router: Router) { }
=======
  constructor() { }
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d

  ngOnInit(): void {
  }

<<<<<<< HEAD

  

=======
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d
}
