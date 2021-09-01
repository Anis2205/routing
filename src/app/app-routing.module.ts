import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Authguard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import {  Candeactivateguard } from "./servers/edit-server/can-deactivate.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";



const appRoutes : Routes = [
  
    {path : "" , component : HomeComponent},
    {path : "notfound" , component : PageNotFoundComponent},
    
    {path : 'users' , component : UsersComponent,children : [
      {path : ':id/:name' , component : UserComponent},
    ]},
    {path : "servers" ,canActivateChild:[Authguard], component : ServersComponent,children:[
      {path : ":id/edit" , component : EditServerComponent,canDeactivate : [Candeactivateguard]},
      {path : ":id" , component : ServerComponent}
    ]},
    {path : "**" ,redirectTo:'/notfound'},
  ]
  
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes) //registering routes in angular
  ],
  //to export to app.module.ts
  exports:[
      RouterModule
  ]
})

export class AppRoutingModule {

}