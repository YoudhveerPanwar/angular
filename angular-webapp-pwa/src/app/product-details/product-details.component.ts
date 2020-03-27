import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  public productList = products;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let productList = localStorage.getItem('productList');
    if(productList) {
      this.productList = JSON.parse(productList);
    }

      this.route.paramMap.subscribe(params => {
      this.product = this.productList[+params.get('productId')];
    });
  }

}