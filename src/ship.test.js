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

test("create a Carrier", () => {
  const ship = new Ship(1);
  expect(ship.length).toBe(5);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("create a Battleship", () => {
  const ship = new Ship(2);
  expect(ship.length).toBe(4);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("create a Destroyer", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("create a Submarine", () => {
  const ship = new Ship(4);
  expect(ship.length).toBe(3);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("create a Patrol Boat", () => {
  const ship = new Ship(5);
  expect(ship.length).toBe(2);
  expect(ship.hits).toBe(0);
  expect(ship.sunk).toBe(false);
});

test("hit a submarine once", () => {
  const ship = new Ship(4);
  expect(ship.hits).toBe(0);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("hit a submarine thrice", () => {
  const ship = new Ship(4);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(3);
});

test("sink a patrol boat", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
