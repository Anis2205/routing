import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,
    private authservice:Authservice) { }

  ngOnInit() {
  }

  toserver(id:number){
    this.router.navigate(["servers"],
    {queryParams:{allowedit : "1"},
    fragment:"loading"})
  }
  onlogin(){
   alert("Successfully logged in!")
   this.authservice.login()
  }
  onlogout(){
    alert("Successfully logged out!")
    this.authservice.logout()
  }

}
