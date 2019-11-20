import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn Angular 8';
  moneyOfParent = 900;

  receivedFromInput(e) {
    this.moneyOfParent = e;
    console.log(e);
  }
}
