import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    {
        path:"",
        component : WelcomeComponent,
        children : [
            {
                path :"",
                component : HomeComponent
            },
            {
                path :"register",
                component : RegisterComponent
            },
            {
                path :"login",
                component : LoginComponent
            },
        ]
    },
    
    
]

    @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class WelcomeRoutingModule { }
