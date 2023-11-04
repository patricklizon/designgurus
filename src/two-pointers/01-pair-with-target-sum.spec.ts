import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./01-pair-with-target-sum";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when array contains numbers that adds up to the target", () => {
    it.each<TestCases>([
      [
        [[1, 2, 3, 4, 6], 6],
        [1, 3],
      ],
      [
        [[2, 5, 9, 11], 11],
        [0, 2],
      ],
    ])("returns a pair of indexes", (params, right) => {
      expect(cb.apply(null, params)).to.have.members(right);
    });
  });

  describe("when array does not contain numbers that adds up to thw target", () => {
    const notFound: [a: number, b: number] = [-1, -1];
    it.each<TestCases>([
      [[[], 100], notFound],
      [[[1, 2, 3, 4, 6], -2], notFound],
      [[[0, 1, 2, 3, 4], 0], notFound],
    ])("returns a pair of -1", (params, right) => {
      expect(cb.apply(null, params)).to.have.members(right);
    });
  });
});
