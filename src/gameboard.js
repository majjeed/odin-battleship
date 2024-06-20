class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = {};
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        this.board[`${row},${col}`] = null;
      }
    }
  }

  placeShip(row, col, ship) {
    for (let length = 0; length < ship.length; length++) {
      this.board[`${row},${col + length}`] = ship;
    }
    return true;
  }
}

export { Gameboard };
