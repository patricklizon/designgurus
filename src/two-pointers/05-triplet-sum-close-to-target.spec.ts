import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./05-triplet-sum-close-to-target";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof fns)[0];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when passed array of numbers forms exactly one triplet matching requirements", () => {
    it.each<TestCases>([
      [[[-1, 0, 2, 3], 3], 2],
      [[[1, 0, 1, 1], 100], 3],
      [[[-1, 0, 1, 2, 4], 4], 4],
    ])("returns the closest possible sum", (params, right) => {
      expect(cb.apply(null, params)).to.eq(right);
    });
  });

  describe("when passed array of numbers forms more than one triplet matching requirements", () => {
    it("returns the closest and smallest possible sum", () => {
      expect(cb([0, 0, 1, 1, 2, 6], 5)).to.eq(4);
    });
  });

  describe("when passed array has less than three elements", () => {
    it.each<TestCases>([
      [[[], 0], 0],
      [[[1], 0], 0],
      [[[1, 2], 0], 0],
    ])("returns NaN", () => {
      expect(cb([], 0)).to.be.NaN;
    });
  });
});
