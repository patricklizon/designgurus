import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./03-sqrt";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when number is negative", () => {
    it("returns NaN", () => {
      expect(cb(-1)).to.be.NaN;
    });
  });

  describe("when number is positive", () => {
    describe("and has integer square root", () => {
      it.each<TestCases>([0, 1, 2, 3, 4, 5, 6].map((x) => [[x * x], x]))(
        "returns positive integer that is a square root of x rounded down to closest integer",
        (params, right) => {
          expect(cb.apply(null, params)).to.equal(right);
        }
      );
    });

    describe("and does not have integer square root", () => {
      it.each<TestCases>([
        [[2], 1],
        [[3], 1],
        [[5], 2],
        [[6], 2],
        [[7], 2],
        [[8], 2],
      ])(
        "returns positive integer that is a square root of x rounded down to closest integer",
        (params, right) => {
          expect(cb.apply(null, params)).to.equal(right);
        }
      );
    });
  });
});
