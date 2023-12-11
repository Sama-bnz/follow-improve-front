import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from '../layout/home/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class WelcomeModule { }
