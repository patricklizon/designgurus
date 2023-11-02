import { describe, expect, it } from "vitest";
import { pangram } from "./02-pangram";

describe.each([[1, pangram]])("solution %s", (_, cb) => {
  describe("when every letter of alphabet appears at least once, either in lower or uppercase", () => {
    it.each([
      [
        "abcdefghijklmnopqrstuvwxyz",
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "TheQuickBrownFoxJumpsOverTheLazyDog",
      ],
    ])("returns true", (param) => {
      expect(cb(param)).to.be.true;
    });
  });

  describe("when only some letters of alphabet appears in the sentence", () => {
    it.each([["abcdefghijklmnopqrstuvwxy", "This is not a pangram", "kayak"]])(
      "returns false",
      (param) => {
        expect(cb(param)).to.be.false;
      }
    );
  });

  describe("when passed string is empty", () => {
    it("returns false", () => {
      expect(cb("")).to.be.false;
    });
  });
});
