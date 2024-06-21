class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = {};
    this.missedShots = new Set();
    this.hits = new Set();
    this.ships = new Set();
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        this.board[`${row},${col}`] = null;
      }
    }
  }

  placeShip(row, col, ship, vertical = false) {
    let isOccupied = false;

    // Check if the ship fits within the board bounds
    if (vertical) {
      if (row + ship.length > this.size) return false;
    } else {
      if (col + ship.length > this.size) return false;
    }

    // Check if the space is already occupied
    if (vertical) {
      for (let length = 0; length < ship.length; length++) {
        if (this.board[`${row + length},${col}`] !== null) {
          isOccupied = true;
        }
      }
    } else {
      for (let length = 0; length < ship.length; length++) {
        if (this.board[`${row},${col + length}`] !== null) {
          isOccupied = true;
        }
      }
    }

    // Place the ship if the space is not occupied
    if (!isOccupied) {
      if (vertical) {
        for (let length = 0; length < ship.length; length++) {
          this.board[`${row + length},${col}`] = ship;
        }
      } else {
        for (let length = 0; length < ship.length; length++) {
          this.board[`${row},${col + length}`] = ship;
        }
      }
      this.ships.add(ship);
      return true;
    } else {
      return false;
    }
  }

  receiveAttack(row, col) {
    // Check if the attack is out of bounds
    const positionKey = `${row},${col}`;

    if (
      row < 0 ||
      row >= this.size ||
      col < 0 ||
      col >= this.size ||
      this.hits.has(positionKey) ||
      this.missedShots.has(positionKey)
    )
      return false;

    const ship = this.board[positionKey];

    if (ship !== null) {
      this.hits.add(positionKey);
      ship.hit();
      return true;
    } else {
      this.missedShots.add(positionKey);
      return false;
    }
  }

  allShipsSunk() {
    for (let ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}

export { Gameboard };
