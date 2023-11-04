import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./02-pangram";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when every letter of alphabet appears at least once, either in lower or uppercase", () => {
    it.each<TestCases>([
      [["abcdefghijklmnopqrstuvwxyz"], true],
      [["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"], true],
      [["TheQuickBrownFoxJumpsOverTheLazyDog"], true],
    ])("returns true", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });

  describe("when only some letters of alphabet appears in the sentence", () => {
    it.each<TestCases>([
      [["abcdefghijklmnopqrstuvwxy"], false],
      [["This is not a pangram"], false],
      [["kayak"], false],
    ])("returns false", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });

  describe("when passed string is empty", () => {
    it("returns false", () => {
      expect(cb("")).to.be.false;
    });
  });
});
