import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../services/models';


@Injectable({
  providedIn: 'root'
})
export class DriversService {

  driver: Driver[] = [];

  private url = "http://btal-ride.herokuapp.com/api/admin/driver";

  constructor(private http: HttpClient) { }

  getDrivers(){
    return this.http.get(this.url);
  }

  addDriver(driver: Driver){
    this.driver.push(driver);
  }

  updateDriver(){
    alert('update');
  }

  deleteDriver(){
    // alert('delete');
  }

  // addDriver(driver: Driver){
  //   this.drivers.push(driver);
  // }
}
