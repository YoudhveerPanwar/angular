import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGaurdService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}