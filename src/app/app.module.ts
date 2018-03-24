import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SelectModule } from 'ng2-select';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      CustomersComponent,
      CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule,
    RouterModule.forRoot([
        {
            path: 'angularapp/customers',
            component: CustomersComponent
        },
        {
            path: 'angularapp',
            component: HomeComponent
        }
    ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
