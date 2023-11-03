import { describe, expect, it } from "vitest";
import { isAnagram } from "./06-is-anagram";

type Pairs = [a: string, b: string];

describe.each([[1, isAnagram]])("solution %s", (_, cb) => {
  describe("when sentence is an anagram", () => {
    it.each<Pairs>([
      ["", ""],
      ["listen", "silent"],
      ["bare", "bear"],
      ["meat", "team"],
    ])("returns true", (...params) => {
      expect(cb(...params)).to.be.true;
    });
  });

  describe("when sentence is not an anagram", () => {
    it.each<Pairs>([
      ["rat", "car"],
      ["racecar", "racecars"],
    ])("returns false", (...params) => {
      expect(cb(...params)).to.be.false;
    });
  });
});
