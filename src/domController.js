// domController.js
import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

class DOMController {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.gameOver = false;
    this.initializeGame();
  }

  initializeGame() {
    this.renderBoards();
    this.addEventListeners();
    this.setupDragAndDrop();
  }

  renderBoards() {
    this.renderBoard(this.player1, "player1-board", true);
    this.renderBoard(this.player2, "player2-board", false);
  }

  renderBoard(player, boardId, showShips) {
    const board = document.getElementById(boardId);
    board.innerHTML = "";

    for (let row = 0; row < player.gameboard.size; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";

      for (let col = 0; col < player.gameboard.size; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;

        const positionKey = `${row},${col}`;

        if (showShips && player.gameboard.board[positionKey] !== null) {
          cell.classList.add("ship");
        }

        if (player.gameboard.hits.has(positionKey)) {
          cell.classList.add("hit");
        } else if (player.gameboard.missedShots.has(positionKey)) {
          cell.classList.add("miss");
        }

        rowDiv.appendChild(cell);
      }

      board.appendChild(rowDiv);
    }
  }

  addEventListeners() {
    const player2Board = document.getElementById("player2-board");
    player2Board.addEventListener("click", this.handleAttack.bind(this));

    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", this.restartGame.bind(this));
  }

  handleAttack(event) {
    event.preventDefault();
    if (this.gameOver) return;

    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (!row || !col) return;

    const positionKey = `${row},${col}`;

    if (
      this.player2.gameboard.hits.has(positionKey) ||
      this.player2.gameboard.missedShots.has(positionKey)
    ) {
      return;
    }

    if (this.currentPlayer === this.player1) {
      this.player1Attack(row, col);
    }
  }

  player1Attack(row, col) {
    const hit = this.player2.gameboard.receiveAttack(row, col);
    this.updateBoard(this.player2, "player2-board", row, col, hit);

    if (this.player2.gameboard.allShipsSunk()) {
      alert(`${this.player1.name} wins!`);
      this.gameOver = true;
      return;
    }

    this.currentPlayer = this.player2;
    this.computerAttack();
  }

  computerAttack() {
    if (this.gameOver) return;

    let row, col, positionKey;
    do {
      row = Math.floor(Math.random() * this.player1.gameboard.size);
      col = Math.floor(Math.random() * this.player1.gameboard.size);
      positionKey = `${row},${col}`;
    } while (
      this.player1.gameboard.hits.has(positionKey) ||
      this.player1.gameboard.missedShots.has(positionKey)
    );

    const hit = this.player1.gameboard.receiveAttack(row, col);
    this.updateBoard(this.player1, "player1-board", row, col, hit);

    if (this.player1.gameboard.allShipsSunk()) {
      alert(`${this.player2.name} wins!`);
      this.gameOver = true;
      return;
    }

    this.currentPlayer = this.player1;
  }

  updateBoard(player, boardId, row, col, hit) {
    const board = document.getElementById(boardId);
    const cell = board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.className = hit ? "cell hit" : "cell miss";
  }

  restartGame() {
    this.player1.gameboard = new Gameboard(this.player1.gameboard.size);
    this.player2.gameboard = new Gameboard(this.player2.gameboard.size);

    this.currentPlayer = this.player1;
    this.gameOver = false;

    this.renderBoards();
  }

  setupDragAndDrop() {
    const ships = document.querySelectorAll(".placeableShip");
    const board = document.getElementById("player1-board");

    ships.forEach((ship) => {
      ship.addEventListener("dragstart", this.dragStart);
    });

    board.addEventListener("dragover", this.dragOver);
    board.addEventListener("drop", this.drop.bind(this));
  }

  dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    const shipId = event.dataTransfer.getData("text/plain");
    const shipElement = document.getElementById(shipId);
    const shipLength = parseInt(shipElement.dataset.length);
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    let num;
    if (shipId === "carrier") {
      num = 1;
    } else if (shipId === "battleship") {
      num = 2;
    } else if (shipId === "destroyer") {
      num = 3;
    } else if (shipId === "submarine") {
      num = 4;
    } else {
      num = 5;
    }
    const ship = new Ship(num);

    if (this.player1.gameboard.placeShip(row, col, ship, false)) {
      this.renderBoard(this.player1, "player1-board", true);
      shipElement.remove();
    } else {
      alert("Invalid placement");
    }
  }
}

export { DOMController };
