import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


export interface cancomponentdeactivate {
    canDeactivate : () =>  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
}

export class Candeactivateguard implements CanDeactivate <cancomponentdeactivate>{
    canDeactivate(
        component: cancomponentdeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate()
    }


}