import { Gameboard } from "./gameboard.js";

class Player {
  constructor(name, isHuman, size) {
    this.name = name;
    this.type = isHuman;
    this.gameboard = new Gameboard(size);
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
    this._type = value === true ? "human" : "computer";
  }

  get gameboard() {
    return this._gameboard;
  }

  set gameboard(value) {
    this._gameboard = value;
  }
}

export { Player };
