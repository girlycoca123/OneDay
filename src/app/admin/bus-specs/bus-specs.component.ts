import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService  } from '../../services/buses.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-specs',
  templateUrl: './bus-specs.component.html',
  styleUrls: ['./bus-specs.component.css']
})
export class BusSpecsComponent implements OnInit {

  
  buses:  Bus[];

  constructor(
    private busesService: BusesService,
    private router :Router
    ) { }

  ngOnInit(): void {
    this.getBuses()
  }
  getBuses(){
    // this.busesService. getBuses().subscribe(buses => {
    //   this.buses = buses as Bus[];
    //   console.log(buses);
    // })
  }

}
