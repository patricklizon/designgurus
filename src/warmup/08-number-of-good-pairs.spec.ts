import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./08-number-of-good-pairs";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when array contains good pairs", () => {
    it.each<TestCases>([
      [[[1, 2, 3, 1, 1, 3]], 4],
      [[[1, 1, 1, 1]], 6],
    ])("returns count of good pairs", (params, right) => {
      expect(cb.apply(null, params)).to.deep.equal(right);
    });
  });

  describe("when array does not contain good pairs", () => {
    it.each<TestCases>([
      [[[1, 2, 3]], 0],
      [[[]], 0],
    ])("returns 0", (params, right) => {
      expect(cb.apply(null, params)).to.deep.equal(right);
    });
  });
});
