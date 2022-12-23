import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { BillsComponent } from './components/bills/bills.component';
import { BillDetailsComponent } from './components/bills/bill-details/bill-details.component';
import { NavBarComponent } from './components/layouts/nav-bar/nav-bar.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ProfileComponent } from './components/profile/profile.component';
import { AddBillComponent } from './components/bills/add-bill/add-bill.component';
import { FormsModule } from '@angular/forms';

export function kcFactory(kcService: KeycloakService) {
  return () => {
    kcService.init({
      config: {
        realm: 'bill-realm',
        clientId: 'bill-client',
        url: 'http://localhost:8080',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true,
      },
    });
  };
}
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    BillsComponent,
    BillDetailsComponent,
    NavBarComponent,
    ProfileComponent,
    AddBillComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
