import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { cancomponentdeactivate } from './can-deactivate.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , cancomponentdeactivate{
  server: { id: number; name: string; status: string; } ;
  serverName = '';
  serverStatus = '';
  allowedit = false;
  constructor(private serversService: ServersService,
    private route : ActivatedRoute,
    private router : Router) { 
    this.server = [] as any
  }


  ngOnInit() {
    const pos = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(pos)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+params['id'])!;
      }
    )
    this.route.queryParams.subscribe(
      (queryparams:Params)=>{
      this.allowedit = queryparams['allowedit'] === '1' ? true :false
       
        console.log(this.allowedit)
      }
    )
  }


  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.router.navigate(['../'],{relativeTo : this.route});
  }


  canDeactivate () : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  
  {
    if(!this.allowedit){
      return true;
    }
    if(this.serverName !== this.server.name || this.serverStatus !== this.server.status){
      return confirm("Do you want to discard changes??")
    }
    else {
      return true
    }
  }

}

