import { expect, test } from "vitest";
import { getAllStarships, getStarshipById } from "../lib/client";

test("getAllStarships", async () => {
  const response = await getAllStarships();
  expect(response.data.count).toBe(36);
  expect(response.data.next).toBe("https://swapi.dev/api/starships/?page=2");
});

test("getStarshipById", async () => {
  const response = await getStarshipById(2);
  expect(response.data.name).toBe("CR90 corvette");
});
