import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../services/models';


@Injectable({
  providedIn: 'root'
})
export class BusesService {

  bus: Bus[] = [];


  private url = 'https://btal-ride.herokuapp.com/api/admin/bus';

  constructor(private http: HttpClient) { }

  getBuses(){
    return this.http.get(this.url);
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
