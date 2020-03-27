import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGaurdReverseService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let userInfo: object = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}
