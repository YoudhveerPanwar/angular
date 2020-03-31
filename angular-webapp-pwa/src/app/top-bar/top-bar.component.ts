import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private loginService: LoginServiceService,private router: Router) { }

  isLoggedIn:boolean

  ngOnInit() {
    this.loginService.isLoggedObs.subscribe(data=>{
      this.isLoggedIn=data;
    });
  }
logout(){
  this.loginService.setLoggedIn(false);
  this.router.navigate(['']);
}

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/