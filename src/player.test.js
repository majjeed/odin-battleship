import { Player } from "./player";
import { test, expect } from "@jest/globals";

test("create a player", () => {
  expect(new Player("ai", false, 2)).toBeTruthy;
});

test("create a human player", () => {
  expect(new Player("you", true, 2)._type).toBe("human");
});

test("create a player with size 2", () => {
  expect(new Player("ai", true, 3).gameboard.size).toBe(3);
});

test("create a full Human player", () => {
  const humanPlayer = new Player("Alice", true, 10);
  expect(humanPlayer.name).toBe("Alice");
  expect(humanPlayer.type).toBe("human");
  expect(humanPlayer.gameboard.size).toBe(10);
});

test("create a full Computer player", () => {
  const computerPlayer = new Player("AI", false, 10);
  expect(computerPlayer.name).toBe("AI");
  expect(computerPlayer.type).toBe("computer");
  expect(computerPlayer.gameboard.size).toBe(10);
});
