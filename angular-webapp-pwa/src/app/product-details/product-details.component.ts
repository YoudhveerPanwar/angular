import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  user: SocialUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (this.user) {
        this.route.paramMap.subscribe(params => {
          this.product = products[+params.get('productId')];
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
