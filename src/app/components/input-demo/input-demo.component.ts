import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent implements OnInit {
  @Input() money: number;

  @Output() sentAppCom: EventEmitter<any> = new EventEmitter<any>();
  
  onClickChangeSent() {
    this.money = 1000;
    this.sentAppCom.emit(this.money);
  }

  constructor() {}

  ngOnInit() {}
}
