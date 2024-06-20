import { test, expect } from "@jest/globals";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

test("create a 3 by 3 gameboard", () => {
  let size = 3;
  const gameboard = new Gameboard(size);
  expect(Object.keys(gameboard.board).length).toBe(size * size);
});

test("create gameboard", () => {
  let size = 1;
  const gameboard = new Gameboard(size);
  expect(gameboard.board).toEqual({
    "0,0": null,
  });
});

test("place a ship", () => {
  let ship = new Ship(2);
  let gameboard = new Gameboard(3);
  expect(gameboard.placeShip(0, 0, ship)).toBe(true);
});

test("check if placed ship occupies the right coordinates", () => {
  let ship = new Ship(5);
  let gameboard = new Gameboard(3);
  gameboard.placeShip(0, 0, ship);
  expect(gameboard.board["0,0"]).toEqual(ship);
  expect(gameboard.board["0,1"]).toEqual(ship);
});
