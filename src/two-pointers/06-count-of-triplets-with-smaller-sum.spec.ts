import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./06-count-of-triplets-with-smaller-sum";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof fns)[0];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when passed array of numbers forms triplets fulfilling requirements", () => {
    it.each<TestCases>([
      [[[-1, 0, 2, 3], 3], 2],
      [[[-1, 4, 2, 1, 3], 5], 4],
    ])("returns correct count", (params, right) => {
      expect(cb.apply(null, params)).to.eq(right);
    });
  });

  describe("when passed array of numbers does not form triplets fulfilling requirements", () => {
    it.each<TestCases>([
      [[[-1, 10, 2, 3], 3], 0],
      [[[-1, 10, 30, 12], 3], 0],
    ])("returns 0", (params, right) => {
      expect(cb.apply(null, params)).to.eq(right);
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
