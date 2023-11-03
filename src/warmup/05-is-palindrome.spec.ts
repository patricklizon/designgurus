import { describe, expect, it } from "vitest";
import { isPalindrome } from "./05-is-palindrome";

describe.each([[1, isPalindrome]])("solution %s", (_, cb) => {
  describe("when sentence is a palindrome", () => {
    it.each<string>([
      "",
      "r",
      "kayak",
      ",r,$%!%%#r",
      "A man, a plan, a canal, Panama!",
      "Was it a car or a cat I saw?",
    ])("returns true", (sentence) => {
      expect(cb(sentence)).to.be.true;
    });
  });

  describe("when sentence is not a palindrome", () => {
    it.each<string>(["12345", "1,r,,6.3-2!xxx", "fly", "gypsy", "crypt"])(
      "returns false",
      (sentence) => {
        expect(cb(sentence)).to.be.false;
      }
    );
  });
});
