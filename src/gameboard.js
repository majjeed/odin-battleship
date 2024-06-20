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
    let isOccupied = false;
    for (let length = 0; length < ship.length; length++) {
      // was just supposed to check if the square is empty but accidentally also checks that the ship placed is not out of bounds
      if (this.board[`${row},${col + length}`] !== null) {
        isOccupied = true;
      }
    }
    if (!isOccupied) {
      for (let length = 0; length < ship.length; length++) {
        this.board[`${row},${col + length}`] = ship;
      }
      return true;
    } else return false;
  }
}

export { Gameboard };
