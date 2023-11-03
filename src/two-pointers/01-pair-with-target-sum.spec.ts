import { describe, expect, it } from "vitest";
import {
  pairWithTargetSum0,
  pairWithTargetSum1,
} from "./01-pair-with-target-sum";

type Fn = typeof pairWithTargetSum0;
type InputExpectedPairs = [input: Parameters<Fn>, expected: ReturnType<Fn>];

describe.each([
  [1, pairWithTargetSum0],
  [2, pairWithTargetSum1],
])("solution %s", (_, cb) => {
  describe("when array contains numbers that adds up to the target", () => {
    it.each<InputExpectedPairs>([
      [
        [[1, 2, 3, 4, 6], 6],
        [1, 3],
      ],
      [
        [[2, 5, 9, 11], 11],
        [0, 2],
      ],
    ])("returns a pair of indexes", (params, right) => {
      expect(cb(...params)).to.deep.equal(right);
    });
  });

  describe("when array does not contain numbers that adds up to thw target", () => {
    const notFound: [a: number, b: number] = [-1, -1];
    it.each<InputExpectedPairs>([
      [[[], 100], notFound],
      [[[1, 2, 3, 4, 6], -2], notFound],
      [[[0, 1, 2, 3, 4], 0], notFound],
    ])("returns a pair of -1", (params, right) => {
      expect(cb(...params)).to.deep.equal(right);
    });
  });
});
