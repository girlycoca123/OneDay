import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { BusesService } from 'src/app/services/buses.service';
import { UserProfile } from 'src/app/services/models';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: UserProfile[];

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

  id:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=> {
        this.id = params.get('id');
      }
    );  document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.get("https://btal-ride.herokuapp.com/api/admin-client/"+this.id, { headers: { Authorization: AuthStr } })
      .then(response => {
      document.getElementById('spinner').style.display = "none";
       this.user = response.data;
      })
    .catch((error) => {
     console.log('error ' + error);
      });
  }
  update(){
    console.log(this.id);
    axios.put("https://btal-ride.herokuapp.com/api/admin/client/"+this.id, this.form.value).then(res => {
      this.router.navigate(['/admin/user-profile']);
    }).catch(err => {
      console.log(err)
    })
  }

}
