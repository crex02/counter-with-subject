import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  counter = 0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
