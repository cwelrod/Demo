import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'auction-application',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
