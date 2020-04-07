import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: SocialUser;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if(user) {
        this.router.navigate(['/listing']);
      }
    });
  }

  signIn() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
    });
  }
}
