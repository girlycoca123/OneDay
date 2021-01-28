import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bus } from '../../services/models';
import { BusesService } from '../../services/buses.service';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  buses: Bus[];
  today:Date
  busName:any;
  
  bus = this.busesService.currentBus;

  form = new FormGroup({
    bus_name: new FormControl(this.bus.bus_name),
    status: new FormControl(this.bus.status),
    start_date: new FormControl('', [
      Validators.required
    ]),
    end_date: new FormControl('', [
      Validators.required
    ]),
    price: new FormControl(this.bus.price),  
     payment: new FormControl('', [
      Validators.required
    ])

  });
  constructor(
    private busesService: BusesService,
    private router: Router
  ) { }
  ngOnInit(): void {
    console.log(this.bus.price);
    this.today = new Date
  }

  

  getBuses() {
    return this.busesService.getBuses;
  }

  booking(){
    const client_id = window.localStorage.getItem('client_id');
    axios.post("https://btal-ride.herokuapp.com/api/client/booking/send/"+client_id, this.form.value)
      .then(response => {
        Swal.fire('Hi', 'Thank You have a nice trip', 'success');
      this.router.navigate(['/userhome']);
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }
}
