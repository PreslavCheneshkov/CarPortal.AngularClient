import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { OfferCardComponent } from './offer-card/offer-card.component';



@NgModule({
  declarations: [
    NavButtonComponent,
    OfferCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavButtonComponent,
    OfferCardComponent
  ]
})
export class SharedModule { }
