import { describe, expect, it } from "vitest";
import { numGoodPairs } from "./08-number-of-good-pairs";

type InputExpectedPairs = [input: number[], expected: number];

describe.each([[1, numGoodPairs]])("solution %s", (_, cb) => {
  describe("when array contains good pairs", () => {
    it.each<InputExpectedPairs>([
      [[1, 2, 3, 1, 1, 3], 4],
      [[1, 1, 1, 1], 6],
    ])("returns count of good pairs", (array, right) => {
      expect(cb(array)).to.equal(right);
    });
  });

  describe("when array does not contain good pairs", () => {
    it.each<InputExpectedPairs>([[[1, 2, 3], 0]])(
      "returns 0",
      (array, right) => {
        expect(cb(array)).to.equal(right);
      }
    );
  });
});
