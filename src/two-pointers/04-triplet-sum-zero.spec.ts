import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./04-triplet-sum-zero";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof fns)[0];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when passed array of numbers forming triplets", () => {
    it.each<TestCases>([
      [
        [[-3, 0, 1, 2, -1, 1, -2]],
        [
          [-3, 1, 2],
          [-2, 0, 2],
          [-2, 1, 1],
          [-1, 0, 1],
        ],
      ],
      [
        [[-5, 2, -1, -2, 3]],
        [
          [-5, 2, 3],
          [-2, -1, 3],
        ],
      ],
      [[[0, 0, 0]], [[0, 0, 0]]],
    ])("returns an array of triplets that sums to 0", (params, right) => {
      expect(cb.apply(null, params)).to.deep.eq(right);
    });
  });

  describe("when passed array of numbers not forming triplets", () => {
    it("returns an empty array", () => {
      expect(cb([1, 2, 3])).to.be.empty;
    });
  });

  describe("when passed array is empty", () => {
    it("returns an empty array", () => {
      expect(cb([])).to.be.empty;
    });
  });

  describe("when passed array size has less than 3 elements", () => {
    it("returns an empty array", () => {
      expect(cb([1, 0])).to.be.empty;
    });
  });
});
