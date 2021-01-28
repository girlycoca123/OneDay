import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService  } from '../../services/buses.service'
import { Router } from '@angular/router';
import axios from 'axios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {MatDialog} from '@angular/material/'


@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  form = new FormGroup({
    bus_name: new FormControl('',Validators.required),
    description : new FormControl('', Validators.required),
    number_of_seat : new FormControl('', Validators.required),
    price : new FormControl('', Validators.required),
    img_url: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });
  buses:  Bus[];

  constructor(
    private busesService: BusesService,
    private router :Router,
    // public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getBuses()
  }
hidden = false;
  deleteMsg(){
this.hidden = !this.hidden;
  }

  getBuses(){
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.buses = response.data;
      document.getElementById('spinner').style.display = "none";
      document.getElementById('container').style.display = "block";
      })
    .catch((error) => {
     console.log('error ' + error);
      });
    }
  view(id){
    this.router.navigate(['/admin/bus_specs/'+id]);
  }
  update(id){
    this.router.navigate(['/admin/update-bus/'+id]);
  }
  addBus(){
    document.getElementById('form').style.display = "block";
    document.getElementById('btnClick').style.display = "none";
    this.router.navigate(['/admin/add-bus'])

  }
  addNewBus(){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.post("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.router.navigate(['/admin/buses'])
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }
  cancel(){
    document.getElementById('form').style.display = "none";
    document.getElementById('btnClick').style.display = "block";
  }
  delete(id){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.delete("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.router.navigate(['/admin/buses'])
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }

  // delDialog(){
  //   const delText = this.dialog.open(BusDialog)
  // }
}

// @Component({
//   selector: 'BusDialog',
//   templateUrl: 'busdialog.component.html'
// })

// export class BusDialog{}
