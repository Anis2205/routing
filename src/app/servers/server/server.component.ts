import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string; } | undefined;
 

  constructor(private serversService: ServersService,
    private router : Router,
    private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    const po=+this.route.snapshot.params['id']
    
    this.server =this.serversService.getServer(po);
    this.route.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
    
    
  }
  toserver(){
    this.router.navigate(["edit"],{relativeTo:this.route,queryParamsHandling:'preserve'})
  }

}
