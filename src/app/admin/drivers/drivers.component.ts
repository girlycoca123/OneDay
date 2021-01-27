import { Component, OnInit } from '@angular/core';
import { Driver } from '../../services/models';
import { DriversService } from 'src/app/services/drivers.service';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers: Driver[];

  constructor(
    private driverService: DriversService 
    ) { }

  ngOnInit(): void {
    this.getDrivers()
  }

  hidden = true;
  getDrivers(){
    this.driverService.getDrivers().subscribe(drivers => {
      this.drivers = drivers as Driver[];
      console.log(drivers);
    })
  }

  deleteDriver(driver: Driver){
    this.drivers.splice(this.drivers.indexOf(driver), 1);
    this.hidden = !this.hidden;
  }

}
