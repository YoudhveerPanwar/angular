import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

	public formData = {
		name : '',
		price : '',
		description : ''
	}
	public productList = [];

	constructor(private router: Router) { 
		let productList = localStorage.getItem('productList');
		if(productList){
			this.productList = JSON.parse(productList);
		}
	}

	ngOnInit() {
	}

	submitForm() {
		if(this.formData.name && this.formData.price && this.formData.description){
			this.productList.unshift(this.formData);
			localStorage.setItem('productList', JSON.stringify(this.productList));
			this.formData.name = '';
			this.formData.price = '';
			this.formData.description = '';
			this.router.navigate(['login']);
		}else{
			alert('Please enter all fields');
		}
	}
}
