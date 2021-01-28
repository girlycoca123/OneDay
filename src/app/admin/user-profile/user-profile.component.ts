import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../services/models';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: UserProfile[];


  constructor(
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  hidden = true;
  id: number;

  delete(id){
    this.hidden = !this.hidden;
    this.id = id;
  }

  getUsers()
    {
      const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
      axios.get("https://btal-ride.herokuapp.com/api/admin-client", { headers: { Authorization: AuthStr } })
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
      .catch((error) => {
       console.log('error ' + error);
        });

      }
  
  // update(id){
  //   this.router.navigate(['/admin/update-user/'+id]);
  // }

  deleteUser(){
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token')); 
    axios.delete("https://btal-ride.herokuapp.com/api/admin-client/"+this.id, { headers: { Authorization: AuthStr } })
    .then(res => {
      return this.router.navigate(['/admin/user-profile']);
    }).catch(err => {
      console.log(err)
    })
    
  }

}