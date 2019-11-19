import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h3 [ngStyle]="{ color: color, background: background }">
      this is hello h3 {{ text }}
    </h3>
    <h3 [ngStyle]="styleMore">this is hello h3 {{ text }}</h3>
    <p [class.width-border]="flagColor">this tag p</p>

    <p
      [ngClass]="{
        'width-border': flagColor,
        'other-class': true
      }"
    >
      this tag as
    </p>

    <button (click)="onChangeColor()">
      {{ flagColor ? 'Change' : 'Changed' }} Color
    </button>
  `
})
export class HelloComponent {
  text = 'Name is Jon';
  color = 'yellow';
  background = 'red';
  styleMore = { background: this.background, color: this.color };
  flagColor = true;

  onChangeColor() {
    // this.flagColor = false;
    this.flagColor = !this.flagColor;
    console.log(this);
  }
}
