import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BusesService } from 'src/app/services/buses.service';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { Bus } from 'src/app/services/models';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  buses:Bus[];

  form = new FormGroup({
    bus_name: new FormControl(''),
    description : new FormControl('',),
    number_of_seat : new FormControl(''),
    price : new FormControl(''),
    img_url: new FormControl(''),
    status: new FormControl('')
  });
 constructor(
    private busesService: BusesService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=> {
        this.id = params.get('id');
      }
    );
    // document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-bus/"+this.id, { headers: { Authorization: AuthStr } })
      .then(response => {
      // document.getElementById('spinner').style.display = "none";
       this.buses = response.data;
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }
  
  updateBus(){
    console.log(this.id);
    axios.put("https://btal-ride.herokuapp.com/api/admin/bus/"+this.id, this.form.value).then(res => {
      this.router.navigate(['/admin/dashboard']);
    }).catch(err => {
      console.log(err)
    })
  }

}
