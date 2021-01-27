import { Component, OnInit,  } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Driver } from '../../services/models';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  addForm: FormGroup;

  firstname;
  lastname;
  contact_number;
  license;
  salary;
  status;

  constructor(
    private router: Router,
    private driversService: DriversService
  ) {}

  ngOnInit(): void {
  }

  addDriver(driver: Driver){
    this.driversService.addDriver(driver);
    // this.driversService.addDriver(driver);
    // this.persons.push(driver);
  }
 

}
