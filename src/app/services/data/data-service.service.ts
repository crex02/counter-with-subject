import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter = new BehaviorSubject<number>(0);

  constructor() { }

  increment(){
    let actualValue = this.counter.value;
    const newValue = actualValue + 1;
    this.counter.next(newValue);
  }
  decrement(){
    let actualValue = this.counter.value;
    const newValue = actualValue - 1;
    this.counter.next(newValue);
  }
}
