import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { BusesService } from 'src/app/services/buses.service';
import { UserProfile } from 'src/app/services/models';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: UserProfile[];

  // form = new FormGroup({
  //   firstname: new FormControl('',Validators.required),
  //   lastname: new FormControl('', Validators.required),
  //   contact_number: new FormControl('', Validators.required),
  //   email_address: new FormControl('', Validators.required),
  //   address: new FormControl('', Validators.required)
  // });

  firstname: string ;
  lastname: string;
  contact_number: Number;
  email_address: string;
  address: string

  submit(data: any) {

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  id: any;

 
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });
    this.user = history.state.data
    console.log(this.user["firstname"]);
    this.firstname =  this.user["firstname"]
    this.lastname =  this.user["lastname"]
    this.contact_number =  this.user["contact_number"]
    this.email_address =  this.user["email_address"]
    this.address =  this.user["address"]
      
  }


  updateUser(){
    console.log(this.id);
    axios.put("https://btal-ride.herokuapp.com/api/admin/client/"+this.id).then(res => {
      this.router.navigate(['/admin/user-profile']);
    }).catch(err => {
      console.log(err)
    })
  }

}
