import { Component, OnInit,Input } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService } from '../../services/buses.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-businfo',
  templateUrl: './businfo.component.html',
  styleUrls: ['./businfo.component.css']
})
export class BusinfoComponent implements OnInit {
  
  @Input() bus : any
  buses: Bus[];

  constructor(
    private busesService: BusesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buses = this.busesService.getBuses();
    console.log(this.buses);
  }

  book(){
    this.busesService.currentBus = this.bus;
    this.router.navigate(["client/booking"])
  }

  getBuses() {
    return this.busesService.getBuses;
  }



}
