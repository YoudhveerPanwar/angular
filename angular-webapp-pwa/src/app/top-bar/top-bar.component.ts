import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

	public userInfo = undefined;

	constructor(private router: Router) { }

	ngOnInit() {
		let userInfo = localStorage.getItem('userInfo');
		if(userInfo){
			this.userInfo = JSON.parse(userInfo);
		}
	}

	logout() {
		localStorage.removeItem('userInfo');
		this.userInfo = undefined;
		this.router.navigate(['login']);
	}

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/