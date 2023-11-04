import { describe, expect, it } from "vitest";
import { makeSquares } from "./03-squaring-a-sorted-array";

const fns = [makeSquares];
const solutions = fns.map((cb, idx) => [idx, cb] as const);

type Fn = (typeof fns)[0];
type InputExpectedPairs = [input: Parameters<Fn>, expected: ReturnType<Fn>];

describe.each(solutions)("solution %s", (_, cb) => {
  describe("when passed array contains sorted numbers", () => {
    it.only.each<InputExpectedPairs>([
      [[[-1]], [1]],
      [[[-3, -1, 0, 1, 2]], [0, 1, 1, 4, 9]],
      [[[-2, -1, 0, 0, 2, 3]], [0, 0, 1, 4, 4, 9]],
    ])("returns array of squared numbers", (params, right) => {
      expect(cb(...params)).to.be.deep.equal(right);
    });
  });

  describe("when passed array is empty", () => {
    it("returns empty array", () => {
      expect(cb([])).to.be.empty;
    });
  });
});
