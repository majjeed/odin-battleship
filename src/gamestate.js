import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

const humanPlayer = new Player("Alice", true, 10);
const computerPlayer = new Player("AI", false, 10);

// const shipsDictionary = {
//   carrier: 1,
//   battlership: 2,
//   destroyer: 3,
//   submarine: 4,
//   patrol: 5,
// };

humanPlayer.gameboard.placeShip(8, 2, new Ship(5), true);
humanPlayer.gameboard.placeShip(2, 0, new Ship(4));
humanPlayer.gameboard.placeShip(4, 0, new Ship(3));
humanPlayer.gameboard.placeShip(6, 0, new Ship(2));
humanPlayer.gameboard.placeShip(9, 5, new Ship(1));

computerPlayer.gameboard.placeShip(8, 9, new Ship(5), true);
computerPlayer.gameboard.placeShip(0, 7, new Ship(4), true);
computerPlayer.gameboard.placeShip(2, 2, new Ship(3));
computerPlayer.gameboard.placeShip(6, 3, new Ship(2), true);
computerPlayer.gameboard.placeShip(3, 0, new Ship(1), true);

//console.table(humanPlayer._gameboard);

// function printPlayer(player) {
//   console.log(`Player: ${player.name}`);
//   console.log(`Type: ${player.type}`);
//   console.log("Gameboard:");
//   for (const [key, value] of Object.entries(player.gameboard.board)) {
//     console.log(
//       `${key}: ${value ? `Ship of length ${value.length}` : "empty"}`
//     );
//   }
//   console.log("Missed Shots:", player.gameboard.missedShots);
//   console.log();
// }

// printPlayer(humanPlayer);
// printPlayer(computerPlayer);

// Function to print the gameboard as a 2D grid
function printGameboard(gameboard) {
  const size = gameboard.size;
  const board = gameboard.board;

  // Create an empty 2D array
  const grid = Array.from({ length: size }, () => Array(size).fill("-"));

  // Fill the grid with ship parts
  for (const [key, value] of Object.entries(board)) {
    const [row, col] = key.split(",").map(Number);
    if (value) {
      grid[row][col] = "S"; // 'S' represents a ship part
    }
  }

  // Print the grid
  console.log("Gameboard:");
  for (let row = 0; row < size; row++) {
    console.log(grid[row].join(" "));
  }
}

// Function to print player details and gameboard
function printPlayer(player) {
  console.log(`Player: ${player.name}`);
  console.log(`Type: ${player.type}`);
  printGameboard(player.gameboard);
  console.log("Missed Shots:", player.gameboard.missedShots.join(", "));
  console.log();
}

// Print both players' gameboards
printPlayer(humanPlayer);
printPlayer(computerPlayer);
