import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Authservice } from "./auth.service";

@Injectable()
export class Authguard implements CanActivate{
    constructor(private authservice : Authservice,
        private route: Router){}
    canActivate(
        route : ActivatedRouteSnapshot,
        state:RouterStateSnapshot) :   any
        {
               return  this.authservice.isactivated()
                .then( (authenticationstate : any) =>{
                        if(authenticationstate){
                            return true;
                        }
                        else{
                            return this.route.navigate([''])   
                                  
                        }
                }
                )
    }
    canActivateChild( route : ActivatedRouteSnapshot,
        state:RouterStateSnapshot) : any {
        return this.canActivate(route,state)
    }


}