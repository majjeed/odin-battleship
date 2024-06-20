import { Gameboard } from "./gameboard";

class Player {
  constructor(name, isHuman, size) {
    this.name = name;
    this.type = isHuman;
    this.gameboard = size;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value === true) {
      this._type = "human";
    } else {
      this._type = "computer";
    }
  }
  get gameboard() {
    return this._gameboard;
  }

  set gameboard(value) {
    this._gameboard = new Gameboard(value);
  }
}

export { Player };
