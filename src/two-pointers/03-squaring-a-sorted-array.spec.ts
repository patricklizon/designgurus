import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./03-squaring-a-sorted-array";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof fns)[0];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when passed array contains sorted numbers", () => {
    it.each<TestCases>([
      [[[-1]], [1]],
      [[[-3, -1, 0, 1, 2]], [0, 1, 1, 4, 9]],
      [[[-2, -1, 0, 0, 2, 3]], [0, 0, 1, 4, 4, 9]],
    ])("returns an array of squared numbers", (params, right) => {
      expect(cb.apply(null, params)).to.be.deep.equal(right);
    });
  });

  describe("when passed array is empty", () => {
    it("returns an empty array", () => {
      expect(cb([])).to.be.empty;
    });
  });
});
