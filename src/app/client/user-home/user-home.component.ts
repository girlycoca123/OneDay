import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService } from '../../services/buses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact_number: new FormControl('', Validators.required),
    email_address: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  buses: Bus[];

  constructor(
    private busesService: BusesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  id: any;
  ngOnInit(): void {
    // Backend side
    this.getBuses();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      const AuthStr = 'Bearer '.concat(window.localStorage.getItem('client_token'));
      axios.get("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
        .then(response => {
          this.buses = response.data;
        })
        .catch((error) => {
          console.log('error ' + error);
        });
    });

    // this.buses = this.busesService.getBuses();
    // console.log(this.buses);
  }

  getBuses() {
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('client_token'));
    axios.get("https://btal-ride.herokuapp.com/api/admin-bus", { headers: { Authorization: AuthStr } })
      .then(response => {
        document.getElementById('spinner').style.display = "none";
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }


  // return this.busesService.getBuses;


  booking() {
    console.log(this.form.value);
    axios
      .post(
        'https://btal-ride.herokuapp.com/api/client/booking/send/' + this.id,
        this.form.value
      )
      .then(res => {
        this.router.navigate(['userhome']);
      })
      .catch(err => {
        console.log(err);
      });
  }
  logout() {
    window.localStorage.removeItem('client_token');
    window.localStorage.removeItem('client_id');
    this.router.navigate(['/']);
  }
  history() {
    this.router.navigate(['client/history']);
  }
}
