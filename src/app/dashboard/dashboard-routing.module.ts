import { RouterModule, Routes } from "@angular/router";
import { ExercisesComponent } from "./exercises/exercises.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path:"",
        component : MainComponent,
        children : [
            {
                path :"",
                component : HomeComponent
            },
            {
                path :"exercises",
                component : ExercisesComponent
            },
            
        ]
    },
]

    @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class DashboardRoutingModule { }