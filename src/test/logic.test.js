import { expect, test } from "vitest";
import { isActualNumber, getStarshipImageByRoute } from "../lib/services";

test("isActualNumber", async () => {
  expect(isActualNumber("")).toBe(false);
  expect(isActualNumber("48")).toBe(true);
  expect(isActualNumber({})).toBe(false);
});

test("getStarshipImageByRoute", async () => {
  // no image response
  expect(getStarshipImageByRoute("")).toBe("/images/no-image.svg");
  // correct starship picture response
  expect(getStarshipImageByRoute("/starships/2/")).toBe(
    "/images/starships/2.jpg"
  );
  // starship with id 1 is not available, hence no image response
  expect(getStarshipImageByRoute("/starships/1/")).toBe("/images/no-image.svg");
});
