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
<<<<<<< HEAD
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
      .then(response => {
        
     console.log(response);
      })
    .catch((error) => {
     console.log('error ' + error);
      });
    }
  
=======
    // this.busesService. getBuses().subscribe(buses => {
    //   this.buses = buses as Bus[];
    //   console.log(buses);
    // })
  }
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d
  update(id){
    this.router.navigate(['/admin/update-bus/'+id]);
  }
  addBus(){
    document.getElementById("table").style.display = "block";
  }
  addnewBus(){
    axios.post("https://btal-ride.herokuapp.com/api/admin/bus").then(res => {
    document.getElementById("table").style.display = "none";
      this.router.navigate(['/admin/dashboard']);
    }).catch(err => {
      console.log(err)
    })
  }
  close(){
    document.getElementById('table').style.display = "none";
  }
  delete(id){
    axios.delete("https://btal-ride.herokuapp.com/api/admin/bus"+id).then(res => {
      this.router.navigate(['/admin/dashboard']);
    }).catch(err => {
      console.log(err)
    })
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
