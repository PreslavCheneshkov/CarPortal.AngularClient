import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegularNavComponent } from './header/regular-nav/regular-nav.component';
import { AdminNavComponent } from './header/admin-nav/admin-nav.component';
import { SharedModule } from '../shared/shared.module';
import { OfferCardComponent } from '../shared/offer-card/offer-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RegularNavComponent,
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
