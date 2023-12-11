import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from '../layout/dashboard/header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    ExercisesComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
