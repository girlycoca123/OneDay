import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

  });

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.form.value);
    /**
     * axios [post, get, put, delete ]
     * axios.post(url, data).then(res=>{}).catch(err=>{})
     * axios.get(url).then(res=>{}).catch(err=>{})
     * axios.put(url, data).then(res=>{}).catch(err=>{})
     * axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
     */
    
    axios.post("https://btal-ride.herokuapp.com/api/admin/register", this.form.value).then(res => {
      console.log(res.data)
      /**
       * token => res.data.token
       * localStorage.setItem('token', res.data.token)
       */
    }).catch(err => {
      console.log(err)
    })
  }

}
