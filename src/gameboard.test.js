import { test, expect, jest } from "@jest/globals";
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

//slight integration testing

test("place a ship", () => {
  let ship = new Ship(2);
  let gameboard = new Gameboard(5);
  expect(gameboard.placeShip(0, 0, ship)).toBe(true);
});

test("check if placed ship occupies the right coordinates", () => {
  let ship = new Ship(5);
  let gameboard = new Gameboard(3);
  gameboard.placeShip(0, 0, ship);
  expect(gameboard.board["0,0"]).toEqual(ship);
  expect(gameboard.board["0,1"]).toEqual(ship);
});

test("don't allow placing a ship on top of another", () => {
  let firstShip = new Ship(5);
  let secondShip = new Ship(4);
  let gameboard = new Gameboard(3);

  gameboard.placeShip(0, 0, firstShip);
  expect(gameboard.placeShip(0, 0, secondShip)).toBe(false);
});

test("allow placing a ship beside another", () => {
  let firstShip = new Ship(5);
  let secondShip = new Ship(4);
  let gameboard = new Gameboard(10);

  gameboard.placeShip(0, 0, firstShip);
  expect(gameboard.placeShip(0, 2, secondShip)).toBe(true);
});

//start using mocks for Ship class
//NOTE: the real implementation of Ship class uses Ship No. not length
const mockShip = jest.fn().mockImplementation((num) => {
  return { length: num };
});

test("create mock ship", () => {
  let ship = new mockShip(2);
  expect(ship).toEqual({ length: 2 });
});

test("check proper value passed to mock ship", () => {
  let ship = new mockShip(2);
  expect(mockShip).toHaveBeenCalledWith(2);
});

//now continue testing gameboard but with mockShip
test("create mock ship and place it", () => {
  let ship = new mockShip(2);
  let gameboard = new Gameboard(3);
  gameboard.placeShip(0, 0, ship);
  expect(gameboard.board["0,0"]).toEqual(ship);
  expect(gameboard.board["0,1"]).toEqual(ship);
});

test("place mock ship vertically", () => {
  let ship = new mockShip(2);
  let gameboard = new Gameboard(3);
  gameboard.placeShip(0, 0, ship, true);
  expect(gameboard.board["0,0"]).toEqual(ship);
  expect(gameboard.board["1,0"]).toEqual(ship);
});

test("attack a square", () => {
  let ship = new Ship(5);
  let gameboard = new Gameboard(3);
  gameboard.placeShip(0, 0, ship);
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(gameboard.receiveAttack(0, 1)).toBe(true);
  expect(gameboard.receiveAttack(0, 3)).toBe(false);
});

test("miss two shots", () => {
  let ship = new Ship(5);
  let gameboard = new Gameboard(3);
  gameboard.placeShip(0, 0, ship);
  gameboard.receiveAttack(1, 1);
  gameboard.receiveAttack(2, 2);
  expect(gameboard.missedShots.length).toBe(2);
});
