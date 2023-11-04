import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./01-contains-duplicates";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when any value appears at least twice in the array", () => {
    it.each<TestCases>([
      [[[1, 1, 1]], true],
      [[[1, 2, 3, 1]], true],
      [[[1, 2, 1, 2]], true],
      [[[1, -2, 3, 3]], true],
      [[[1, -2, -2, 3]], true],
      [[[1, 2, 2, 3, 3, 4, 4]], true],
      [[[4, 7, 9, 3, 1, 3]], true],
    ])("returns true", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });

  describe("when there are no duplicated values", () => {
    it.each<TestCases>([
      [[[0, -1, 23, 78]], false],
      [[[1, 2, 3, 4]], false],
    ])("returns false", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });

  describe("when array is empty", () => {
    it("returns false", () => {
      expect(cb([])).to.be.false;
    });
  });
});
