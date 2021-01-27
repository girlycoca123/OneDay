import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { IndexComponent } from './client/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { UserHomeComponent } from './client/user-home/user-home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { BusesComponent } from './admin/buses/buses.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { UpdateBusComponent } from './admin/update-bus/update-bus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatIconModule} from '@angular/material/icon';
import { BusSpecsComponent } from './admin/bus-specs/bus-specs.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UpdateDriverComponent } from './admin/update-driver/update-driver.component';
import { AboutComponent } from './client/about/about.component';
import { HistoryComponent } from './client/history/history.component';
// import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HomeComponent,
    FooterComponent,
    UserHomeComponent,
    AdminloginComponent,
    AdminregisterComponent,
    NavbarComponent,
    BookingsComponent,
    BusesComponent,
    DriversComponent,
    UserProfileComponent,
    UpdateBusComponent,
    BusSpecsComponent,
    UpdateUserComponent,
    UpdateDriverComponent,
    AboutComponent,
    HistoryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
