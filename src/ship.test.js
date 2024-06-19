import { Ship } from "./ship";
import { test, expect } from "@jest/globals";

/*
    No  .Class of ship	Size
    1	Carrier	        5
    2	Battleship	    4
    3	Destroyer	    3
    4	Submarine	    3
    5	Patrol Boat	    2
*/

test.only("create a Carrier", () => {
  const submarine = new Ship(1);
  expect(submarine.length).toBe(5);
  expect(submarine.hits).toBe(0);
  expect(submarine.sunk).toBe(false);
});

test.only("create a Battleship", () => {
  const submarine = new Ship(2);
  expect(submarine.length).toBe(4);
  expect(submarine.hits).toBe(0);
  expect(submarine.sunk).toBe(false);
});

test.only("create a Destroyer", () => {
  const submarine = new Ship(3);
  expect(submarine.length).toBe(3);
  expect(submarine.hits).toBe(0);
  expect(submarine.sunk).toBe(false);
});

test.only("create a Submarine", () => {
  const submarine = new Ship(4);
  expect(submarine.length).toBe(3);
  expect(submarine.hits).toBe(0);
  expect(submarine.sunk).toBe(false);
});

test.only("create a Patrol Boat", () => {
  const submarine = new Ship(5);
  expect(submarine.length).toBe(2);
  expect(submarine.hits).toBe(0);
  expect(submarine.sunk).toBe(false);
});

test.only("hit a submarine once", () => {
  const submarine = new Ship(4);
  expect(submarine.hits).toBe(0);
  submarine.hit();
  expect(submarine.hits).toBe(1);
});
