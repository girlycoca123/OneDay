import { Component, OnInit,  } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Driver } from '../../services/models';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import axios from 'axios';
import { LoginComponent } from 'src/app/client/login/login.component';
FormsModule



@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

firstname;
lastname;

  constructor(
    private router: Router,
    private driversService: DriversService
  ) {}

  ngOnInit(): void {
  }

  test(data: any){
    console.log(data);
    
  }

  addDriver(driver: Driver){
    console.log(driver);
    // const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    // axios.post("https://btal-ride.herokuapp.com/api/admin-driver", { headers: { Authorization: AuthStr } })
    //   .then(response => {
    //   this.router.navigate(['admin/drivers']);
    //   })
    // .catch((error) => {
    //  console.log('error ' + error);
    //   });
  }
 

}
