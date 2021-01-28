import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form = new FormGroup({
    email_address: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

  });

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  login() {
    document.getElementById('spinner').style.display = "block";
    axios.post("https://btal-ride.herokuapp.com/api/client/login", this.form.value).then(res => {
      console.log(res.data);
      window.localStorage.setItem('client_token',res.data.access_token);
      window.localStorage.setItem('client_id',res.data.client_id);
      document.getElementById('spinner').style.display ="none";
      return this.router.navigate(['/userhome']);
    }).catch(err => {
      alert(err);
      document.getElementById('spinner').style.display ="none";
    })
  }

}
