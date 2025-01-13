const Food = require("./Food");

class SuperFood extends Food {
  constructor(server, owner, position, size) {
    super(server, owner, position, size);
    this.type = 4;
    this.color = { r: 0, g: 0, b: 0 };
  }
  onEaten(player) {
    const newSize = Math.sqrt(player._radius2 * 2);
    player.setSize(newSize);
  }
}

module.exports = SuperFood;
