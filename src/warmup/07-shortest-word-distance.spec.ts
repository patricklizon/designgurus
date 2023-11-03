import { describe, expect, it } from "vitest";
import { shortestDistance } from "./07-shortest-word-distance";

type InputExpectedPairs = [
  input: [ws: string[], a: string, b: string],
  expected: number
];

describe.each([[1, shortestDistance]])("solution %s", (_, cb) => {
  describe("when words are in array", () => {
    describe("and are unique", () => {
      it.each<InputExpectedPairs>([
        [[["a", "b", "c", "d", "e"], "a", "e"], 4],
        [
          [
            [
              "the",
              "quick",
              "brown",
              "fox",
              "jumps",
              "over",
              "the",
              "lazy",
              "dog",
            ],
            "fox",
            "dog",
          ],
          5,
        ],
      ])("returns correct distance", (params, right) => {
        expect(cb(...params)).to.equal(right);
      });
    });

    describe("and occurs more than once", () => {
      it.each<InputExpectedPairs>([
        [
          [
            ["repeated", "words", "in", "the", "array", "words"],
            "repeated",
            "words",
          ],
          1,
        ],
        [[["a", "c", "a", "b", "b", "a"], "a", "b"], 1],
        [[["a", "c", "d", "b", "a"], "a", "b"], 1],
      ])("returns correct distance", (params, right) => {
        expect(cb(...params)).to.equal(right);
      });
    });
  });

  describe("when words are not in the array", () => {
    it("returns -1", () => {
      expect(shortestDistance(["a"], "x", "c")).to.be.equal(-1);
    });
  });

  describe("when only one word is in the array", () => {
    it("returns -1", () => {
      expect(shortestDistance(["a"], "a", "c")).to.be.equal(-1);
    });
  });
});
