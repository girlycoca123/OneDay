import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { BusesService } from 'src/app/services/buses.service';
import { Bus } from '../../services/models';  
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})

export class AddBusComponent implements OnInit {
  form = new FormGroup({
    bus_name: new FormControl('',Validators.required),
    description : new FormControl('', Validators.required),
    number_of_seat : new FormControl('', Validators.required),
    price : new FormControl('', Validators.required),
    img_url: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });
 constructor(
    private busesService: BusesService,
    private router : Router
    ) { }

  ngOnInit(): void {
    
  }
  addBus(bus){
    this.busesService.addBus(bus);
    console.log(this.form.value);
    axios.post("https://btal-ride.herokuapp.com/api/admin/bus", this.form.value).then(res => {
      this.router.navigate(['/admin/dashboard']);
    }).catch(err => {
      console.log(err)
    })
    this.router.navigate(['admin/buses']);
  }
}
