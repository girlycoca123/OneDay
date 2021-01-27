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
<<<<<<< HEAD
    name: new FormControl('',Validators.required),
    email: new FormControl('', [
=======
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    contact_number: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]{12}")
    ]),
    email_address: new FormControl('', [
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])

  });

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private router: Router) { }
  get firstname() {
    return this.form.get('firstname')
  }
  get lastname(){
    return this.form.get('lastname')
  }
  get address(){
    return this.form.get('address')
  }
  get contact_number(){
    return this.form.get('contact_number')
  }
  get email_address(){
    return this.form.get('email_address')
  }
  get password(){
    return this.form.get('password')
  }
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d

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
