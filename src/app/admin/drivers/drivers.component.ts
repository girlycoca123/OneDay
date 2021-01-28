import { Component, OnInit } from '@angular/core';
import { Driver } from '../../services/models';
import { DriversService } from 'src/app/services/drivers.service';
import axios from 'axios';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  form = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname : new FormControl('', Validators.required),
    contact_number : new FormControl('', Validators.required),
    license: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });
  drivers: Driver[];

  constructor(
    private driverService: DriversService,
    private router : Router

    ) { }

  ngOnInit(): void {
    this.getDrivers()
  }

  hidden = true;
  getDrivers(){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-driver", { headers: { Authorization: AuthStr } })
      .then(response => {
        this.drivers = response.data;
        console.log(this.drivers);
        
      })
    .catch((error) => {
     console.log('error ' + error);
      });

  }


  UpdateDriver(id){
    this.router.navigate(['/admin/update-driver/'+id]);
  }
  addnewDriver(){
    console.log(this.form.value);
    axios.post("https://btal-ride.herokuapp.com/api/admin/driver", this.form.value).then(res => {
      document.getElementById("table").style.display = "none";
      this.router.navigate(['/admin/driver']);
    }).catch(err => {
      alert(err);
    })
  }

  add(){
    this.router.navigate(['admin/add-driver']);
  }
  addDriver(){
    document.getElementById("table").style.display = "block";
  }

  close(){
    document.getElementById("table").style.display = "none";
  }

  deleteDriver(driver: Driver){
    this.drivers.splice(this.drivers.indexOf(driver), 1);
    this.hidden = !this.hidden;
  }

}
