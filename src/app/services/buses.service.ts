import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../services/models';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class BusesService {

  bus: Bus[] = [];


  private url = 'https://btal-ride.herokuapp.com/api/admin-bus';

  constructor(private http: HttpClient) { }

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
  }

  updateBus(){
    alert('update');
  }

  deleteBus(){
    alert('delete');
  }
}
