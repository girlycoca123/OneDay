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

  getUsers(){
    this.userService.getUsers().subscribe(users => {
      this.users = users as UserProfile[];
      console.log(users);
    })
  }

  deleteUser(id, user: UserProfile){
    this.users.splice(this.users.indexOf(user), 1);
    axios.post("https://btal-ride.herokuapp.com/api/admin/client"+id).then(res => {
      return this.router.navigate(['/admin/dashboard']);
    }).catch(err => {
      console.log(err)
    })
    this.hidden = !this.hidden;
  }

}