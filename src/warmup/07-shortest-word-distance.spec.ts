import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./07-shortest-word-distance";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when words are in array", () => {
    describe("and are unique", () => {
      it.each<TestCases>([
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
      it.each<TestCases>([
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
        expect(cb.apply(null, params)).to.deep.equal(right);
      });
    });
  });

  describe("when words are not in the array", () => {
    it("returns -1", () => {
      expect(cb(["a"], "x", "c")).to.be.equal(-1);
    });
  });

  describe("when only one word is in the array", () => {
    it("returns -1", () => {
      expect(cb(["a"], "a", "c")).to.be.equal(-1);
    });
  });
});
