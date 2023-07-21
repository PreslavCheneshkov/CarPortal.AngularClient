import { Component } from '@angular/core';

@Component({
  selector: 'app-regular-nav',
  templateUrl: './regular-nav.component.html',
  styleUrls: ['./regular-nav.component.css']
})
export class RegularNavComponent {
  userIsLoggedIn: boolean = false;
  userIsAdmin: boolean = false;
}
