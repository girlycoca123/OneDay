import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './client//login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { IndexComponent } from './client/index/index.component';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { UserHomeComponent } from './client/user-home/user-home.component';
import {  AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BusesComponent } from './admin/buses/buses.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { UpdateBusComponent } from './admin/update-bus/update-bus.component';
import { AddBusComponent } from './admin/add-bus/add-bus.component';
import { BusSpecsComponent } from './admin/bus-specs/bus-specs.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';



const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'',component:HomeComponent },
  { path: 'client/register', component: RegisterComponent}, 
  { path: 'client/login', component: LoginComponent},
  { path: 'index', component: IndexComponent},
  { path:'footer', component:FooterComponent },
  { path:'userhome', component:UserHomeComponent},
  { path: 'admin/login',component:AdminloginComponent },
  { path:'admin/register',component:AdminregisterComponent},
  { path:'admin', component: NavbarComponent,
  children:[
  { path: 'bookings', component: BookingsComponent},
  { path: 'buses', component: BusesComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path:'add-bus', component: AddBusComponent},
  {path:'update-bus/:id', component:UpdateBusComponent},
  { path: 'admin/bus_specs', component: BusSpecsComponent},
  { path: 'admin/add-driver', component: AddDriverComponent}
  ]
},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }