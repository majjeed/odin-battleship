import { Player } from "./player";
import { test, expect, jest } from "@jest/globals";

test("create a player", () => {
  expect(new Player("ai", false, 2)).toBeTruthy;
});

test("create a human player", () => {
  expect(new Player("you", true, 2)._type).toBe("human");
});

test("create a player with size 2", () => {
  expect(new Player("ai", true, 3).gameboard.size).toBe(3);
});
