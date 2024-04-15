import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor() {}

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    alert(`change active to inactive counter ${this.activeToInactiveCounter}`);
  }

  incrementIncactiveToActive() {
    this.inactiveToActiveCounter++;
    alert(`change inactive to active counter ${this.inactiveToActiveCounter}`);
  }
}
