import { describe, expect, it } from "vitest";
import { sqrt } from "./03-sqrt";

describe.each([[1, sqrt]])("solution %s", (_, cb) => {
  describe("when number is negative", () => {
    it("returns NaN", () => {
      expect(cb(-1)).to.be.NaN;
    });
  });

  describe("when number is positive", () => {
    describe("and has integer square root", () => {
      it.each<[value: number, result: number]>(
        [0, 1, 2, 3, 4, 5, 6].map((x) => [x * x, x])
      )(
        "returns positive integer that is a square root of x rounded down to closest integer",
        (left, right) => {
          expect(cb(left)).to.equal(right);
        }
      );
    });

    describe("and does not have integer square root", () => {
      it.each<[value: number, result: number]>([
        [2, 1],
        [3, 1],
        [5, 2],
        [6, 2],
        [7, 2],
        [8, 2],
      ])(
        "returns positive integer that is a square root of x rounded down to closest integer",
        (left, right) => {
          expect(cb(left)).to.equal(right);
        }
      );
    });
  });
});
