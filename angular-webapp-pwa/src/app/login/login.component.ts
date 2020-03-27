import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public auth2: any;
	public userInfo;
	constructor(private router: Router) { }

	ngOnInit() {
		this.googleInit();
	}

	public googleInit() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: '98556170538-ca9h7bep5o99k090ndf6v4g4vh7ahmtd.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            this.attachSignin(document.getElementById('googleLoginBtn'));
        });
    }

    public attachSignin(element) {
        this.auth2.attachClickHandler(element, {},
            (googleUser) => {
                let profile = googleUser.getBasicProfile();
                if (profile) {
                	this.userInfo = {};
                    this.userInfo['socialid'] = profile.getId();
                    this.userInfo['firstname'] = profile.getGivenName();
                    this.userInfo['lastname'] = profile.getFamilyName();
                    this.userInfo['email'] = profile.getEmail();
                    this.userInfo['profileurl'] = profile.getImageUrl();    
                    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                    window.location.href = "";
                }
            }, (error) => {
                alert(JSON.stringify(error, undefined, 2));
            });
    }
}
