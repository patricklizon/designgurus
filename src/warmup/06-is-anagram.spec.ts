import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./06-is-anagram";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)(" %s", (_, cb) => {
  describe("when sentence is an anagram", () => {
    it.each<TestCases>([
      [["", ""], true],
      [["listen", "silent"], true],
      [["bare", "bear"], true],
      [["meat", "team"], true],
    ])("returns true", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });

  describe("when sentence is not an anagram", () => {
    it.each<TestCases>([
      [["rat", "car"], false],
      [["racecar", "racecars"], false],
    ])("returns false", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });
});
