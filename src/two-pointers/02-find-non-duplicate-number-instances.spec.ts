import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./02-find-non-duplicate-number-instances";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof fns)[0];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)(" %s", (_, cb) => {
  describe("when array contains duplicated number", () => {
    it.each<TestCases>([
      [[[2, 3, 3, 3, 6, 9, 9]], 4], // [2, 3, 6, 9]
      [[[2, 2, 2, 11]], 2], // [2, 11]
    ])("returns length of sub array without duplicates", (params, right) => {
      expect(cb.apply(null, params)).to.be.deep.equal(right);
    });
  });

  describe("when array does not contain duplicated numbers", () => {
    it.each<TestCases>([
      [[[1, 2, 3, 4]], 4],
      [[[420]], 1],
      [[[]], 0],
    ])("returns length of the array", (params, right) => {
      expect(cb.apply(null, params)).to.be.deep.equal(right);
    });
  });
});
