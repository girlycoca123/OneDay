import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { DriversService } from 'src/app/services/drivers.service';
import { Driver } from '../../services/models';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {

  // form: FormGroup;
  // currentIndex: number;
  driver: Driver[];

  firstname: string;
  lastname: string;
  contact_number: number;
  license: string;
  status: boolean;
  salary: number;

  submit(data: any){

  }

  constructor(
    private router : Router,
    private route : ActivatedRoute) { }

  id: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });
    console.log(this.driver["firstname"]);
    console.log(this.id);
    this.driver = history.state.data
    this.firstname =  this.driver["firstname"]
    this.lastname = this.driver["lastname"];
    this.contact_number = this.driver["contact_number"];
    this.license = this.driver["license"];
    this.status = this.driver["status"];
    this.salary = this.driver["salary"];

  }

  updateDriver(){
    console.log(this.id);
    axios.put("https://btal-ride.herokuapp.com/api/admin/driver/"+this.id).then(res => {
      // , this.form.value
      this.router.navigate(['/admin']);
    }).catch(err => {
      console.log(err)
    })
  }
}
