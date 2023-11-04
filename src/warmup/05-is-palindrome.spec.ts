import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./05-is-palindrome";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when sentence is a palindrome", () => {
    it.each<TestCases>([
      [[""], true],
      [["r"], true],
      [["kayak"], true],
      [[",r,$%!%%#r"], true],
      [["A man, a plan, a canal, Panama!"], true],
      [["Was it a car or a cat I saw?"], true],
    ])("returns true", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });
  ``;

  describe("when sentence is not a palindrome", () => {
    it.each<TestCases>([
      [["12345"], false],
      [["1,r,,6.3-2!xxx"], false],
      [["fly"], false],
      [["gypsy"], false],
      [["crypt"], false],
    ])("returns false", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });
});
