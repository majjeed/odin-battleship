// index.js
import "./style.css";
import { Player } from "./player.js";
import { DOMController } from "./domController.js";
import { Ship } from "./ship.js";

// Create Players
const player1 = new Player("Player 1", true, 10);
const player2 = new Player("Computer", false, 10);

// Prepopulate game boards with ships (for now, hard-coded)
const carrier1 = new Ship(1);
const battlership1 = new Ship(2);
const destroyer1 = new Ship(3);

const carrier2 = new Ship(1);
const battleship2 = new Ship(2);
const destroyer2 = new Ship(3);

player1.gameboard.placeShip(0, 0, carrier1, false);
player1.gameboard.placeShip(2, 2, battlership1, true);
player1.gameboard.placeShip(4, 4, destroyer1, false);

player2.gameboard.placeShip(1, 1, carrier2, false);
player2.gameboard.placeShip(3, 3, battleship2, true);
player2.gameboard.placeShip(5, 5, destroyer2, false);

// Initialize DOM Controller
const domController = new DOMController(player1, player2);
