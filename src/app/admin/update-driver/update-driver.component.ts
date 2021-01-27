import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { BusesService } from 'src/app/services/buses.service';
import { Bus } from '../../services/models';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {

  form: FormGroup;
  currentIndex: number;
  constructor(private busesService: BusesService,
    private router : Router,
    private route : ActivatedRoute) { }

  id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=> {
        this.id = params.get('id');
      }
    );

// this.currentIndex = this.busesService.currentIndex;
    this.form = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname : new FormControl('', Validators.required),
      contact_number : new FormControl('', Validators.required),
      license: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required)
    });




  }
  updateDriver(){
    console.log(this.id);
    axios.put("https://btal-ride.herokuapp.com/api/admin/driver/"+this.id, this.form.value).then(res => {
      this.router.navigate(['/admin']);
    }).catch(err => {
      console.log(err)
    })
  }
}
