import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Bus } from '../services/models';
import axios from 'axios';

=======
import { Bus } from './models';
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d

@Injectable({
  providedIn: 'root'
})
export class BusesService {
<<<<<<< HEAD

  bus: Bus[] = [];


  private url = 'https://btal-ride.herokuapp.com/api/admin-bus';
=======
  private url = 'https://btal-ride.herokuapp.com/api/admin/bus';
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d

  constructor(private http: HttpClient) {}

  // private buses: Bus[] = [
  //   {
  //     bus_id: 1,
  //     bus_name: 'Luna',
  //     status: false,
  //     price: 200,
  //     payment: 'cod',
  //     img_url: '../../assets/images/bus5.jpg'
  //   },
  //   {
  //     bus_id: 2,
  //     bus_name: 'Rizal',
  //     status: true,
  //     price: 300,
  //     payment: 'paypal',
  //     img_url: '../../assets/images/bus2.jpg'
  //   },
  //   {
  //     bus_id: 3,
  //     bus_name: 'Rizal',
  //     status: true,
  //     price: 300,
  //     payment: 'paypal',
  //     img_url: '../../assets/images/bus4.jpg'
  //   }
  // ];

<<<<<<< HEAD
  getBuses(){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get(this.url, { headers: { Authorization: AuthStr } })
      .then(response => {
    return this.http.get(this.url);
        
     console.log(response);
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }

  addBus(bus: Bus){
    this.bus.push(bus);
=======
  currentBus:any;

  getBuses() {
    return this.http.get(this.url);

    // return this.buses
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d
  }

  updateBus() {
    alert('update');
  }

  deleteBus() {
    alert('delete');
  }
}
