// index.js
import "./style.css";
import { Player } from "./player.js";
import { DOMController } from "./domController.js";

// Create Players
const player1 = new Player("Player 1", true, 10);
const player2 = new Player("Computer", false, 10);

// Initialize DOM Controller
const domController = new DOMController(player1, player2);
