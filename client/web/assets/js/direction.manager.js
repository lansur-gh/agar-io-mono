"use strict";

class DirectionManager {
  constructor() {
    this.x = NaN;
    this.y = NaN;
  }

  setDirectionX(x) {
    this.x = x;
  }

  setDirectionY(y) {
    this.y = y;
  }

  getDirection() {
    return { x: this.x, y: this.y };
  }
}

window.DirectionManager = DirectionManager;
