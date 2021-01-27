import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './client//login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { IndexComponent } from './client/index/index.component';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { UserHomeComponent } from './client/user-home/user-home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { BusesComponent } from './admin/buses/buses.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { UpdateBusComponent } from './admin/update-bus/update-bus.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UpdateDriverComponent } from './admin/update-driver/update-driver.component';
import { AddBusComponent } from './admin/add-bus/add-bus.component';
<<<<<<< HEAD
import { BusSpecsComponent } from './admin/bus-specs/bus-specs.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';
import { AboutComponent } from './client/about/about.component';
import { TokenGuard } from './guards/token/token.guard';
import { ClientGuard } from './guards/token/client.guard';
=======
import { BookingFormComponent } from './client/booking-form/booking-form.component';
import { HistoryComponent } from './client/history/history.component'
// import { BusinfoComponent } from './client/businfo/businfo.component';
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d



const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'client/register', component: RegisterComponent },
  { path: 'client/login', component: LoginComponent },
  { path: 'client/about', component: AboutComponent },
  { path: 'client/history', component: History },
  { path: 'index', component: IndexComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'userhome', component: UserHomeComponent, canActivate :[ClientGuard] },
  { path: 'admin/login', component: AdminloginComponent },
  { path: 'admin/register', component: AdminregisterComponent },
  {
    path: 'admin', component: NavbarComponent , canActivate :[TokenGuard],
    children: [
      { path: 'bookings', component: BookingsComponent },
      { path: 'buses', component: BusesComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'update-bus/:id', component: UpdateBusComponent },
      { path: 'admin/bus_specs', component: BusSpecsComponent },
      { path: 'admin/add-driver', component: AddDriverComponent }
    ]
  },
]

=======
  // { path: '/userhome', redirectTo: 'home', pathMatch: 'full' },
  { path:'',component:HomeComponent },
  { path: 'client/register', component: RegisterComponent}, 
  { path: 'client/login', component: LoginComponent},
  { path:'client/booking',component:BookingFormComponent },
  {path: 'client/history', component:HistoryComponent},
  { path:'userhome', component:UserHomeComponent},
  { path: 'admin/login',component:AdminloginComponent },
  { path:'admin/register',component:AdminregisterComponent},
  { path:'admin', component: NavbarComponent,
  children:[
  { path: 'bookings', component: BookingsComponent },
  { path: 'buses', component: BusesComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path:'update-bus/:id', component:UpdateBusComponent },
  { path:'update-user/:id', component:UpdateUserComponent },
  { path:'update-driver/:id', component:UpdateDriverComponent },
  { path:'add-bus', component:AddBusComponent },
  ]
},
  ]
>>>>>>> 858e2b168435f1331847979aa9b1fb1788ebf23d
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }