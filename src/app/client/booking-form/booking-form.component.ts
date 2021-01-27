import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService } from '../../services/buses.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  buses: Bus[];

  constructor(
    private busesService: BusesService,
  ) { }
  bus = this.busesService.currentBus
  ngOnInit(): void {
    console.log(this.bus)
  }

  

  getBuses() {
    return this.busesService.getBuses;
  }


  resetBtn(){
    // this.buses.reset()
  }
}
