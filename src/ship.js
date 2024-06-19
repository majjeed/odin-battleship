/*
    No  .Class of ship	Size
    1	Carrier	        5
    2	Battleship	    4
    3	Destroyer	    3
    4	Submarine	    3
    5	Patrol Boat	    2
*/

class Ship {
  constructor(num) {
    this.length = num;
    this.hits = 0;
    this.sunk = false;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    switch (value) {
      case 1:
        this._length = 5;
        break;
      case 2:
        this._length = 4;
        break;
      case 3:
        this._length = 3;
        break;
      case 4:
        this._length = 3;
        break;
      case 5:
        this._length = 2;
        break;
      default:
        this._length = 0;
        break;
    }
  }

  get hits() {
    return this._hits;
  }

  set hits(value) {
    this._hits = value;
  }

  hit() {
    this.hits += 1;
  }
}

export { Ship };
