import { Component } from '@angular/core';
import { Offer } from 'src/app/shared/Interfaces/Offer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  innerOffer: Offer = {
    name: "firstTest",
    horsePower: 123,
    price: 543
  }  

  
}
