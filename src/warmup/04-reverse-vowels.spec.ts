import { describe, expect, it } from "vitest";
import { reverseVowels } from "./04-reverse-vowels";

type InputExpectPair = [value: string, result: string];

describe.each([[1, reverseVowels]])("solution %s", (_, cb) => {
  describe("when word has vowels", () => {
    it.each<InputExpectPair>([
      ["aA", "Aa"],
      ["hello", "holle"],
      ["AEIOU", "UOIEA"],
      ["DesignGUrus", "DusUgnGires"],
    ])("returns string with reversed vowels in it", (left, right) => {
      expect(cb(left)).to.equal(right);
    });
  });

  describe("when word does not has vowels", () => {
    it.each<InputExpectPair>(["fly", "gypsy", "crypt"].map((s) => [s, s]))(
      "returns unchanged string",
      (left, right) => {
        expect(cb(left)).to.equal(right);
      }
    );
  });

  describe("when passed string is empty", () => {
    it("returns unchanged string", () => {
      expect(cb("")).to.equal("");
    });
  });
});
