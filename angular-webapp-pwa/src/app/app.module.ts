import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthGaurdService } from './auth-gaurd.service';
import { AuthGaurdReverseService } from './auth-gaurd-reverse.service';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './create-product/create-product.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: ProductListComponent ,
        canActivate: [AuthGaurdService],
      },
      { 
        path: 'products/:productId', 
        component: ProductDetailsComponent ,
        canActivate: [AuthGaurdService],
      },
      { 
        path: 'product-create', 
        component: CreateProductComponent ,
        canActivate: [AuthGaurdService],
      },
      { 
        path: 'login', 
        component: LoginComponent ,
        canActivate: [AuthGaurdReverseService]
      },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    LoginComponent,
    CreateProductComponent
  ],
  providers: [AuthGaurdService, AuthGaurdReverseService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/