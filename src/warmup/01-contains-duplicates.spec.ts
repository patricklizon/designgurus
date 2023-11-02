import { describe, expect, it } from "vitest";
import {
  containsDuplicates0,
  containsDuplicates1,
} from "./01-contains-duplicates";

describe.each([
  [1, containsDuplicates0],
  [2, containsDuplicates1],
])("solution %s", (_, cb) => {
  describe("when any value appears at least twice in the array", () => {
    it.each([
      [
        [1, 1, 1],
        [1, 2, 3, 1],
        [1, 2, 1, 2],
        [1, -2, 3, 3],
        [1, -2, -2, 3],
        [1, 2, 2, 3, 3, 4, 4],
        [4, 7, 9, 3, 1, 3],
      ],
    ])("returns true", (param) => {
      expect(cb(param)).to.be.true;
    });
  });

  describe("when there are no duplicated values", () => {
    it.each([
      [
        [0, -1, 23, 78],
        [1, 2, 3, 4],
      ],
    ])("returns false", (param) => {
      expect(cb(param)).to.be.false;
    });
  });

  describe("when array is empty", () => {
    it("returns false", () => {
      expect(cb([])).to.be.false;
    });
  });
});
