import { Component, Input } from '@angular/core';
import { Offer } from '../Interfaces/Offer';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent {
  @Input() offer: Offer | undefined = undefined;

}
