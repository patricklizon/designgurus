import { describe, expect, it } from "vitest";
import { type InputExpectedPairs } from "../utils";
import * as all from "./04-reverse-vowels";

const fns = Object.values(all);
const solutions = fns.map((cb) => [cb.name, cb] as const);

type Fn = (typeof solutions)[0][1];
type TestCases = InputExpectedPairs<Fn>;

describe.each(solutions)("%s", (_, cb) => {
  describe("when word has vowels", () => {
    it.each<TestCases>([
      [["aA"], "Aa"],
      [["hello"], "holle"],
      [["AEIOU"], "UOIEA"],
      [["DesignGUrus"], "DusUgnGires"],
    ])("returns string with reversed vowels in it", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });

  describe("when word does not has vowels", () => {
    it.each<TestCases>([
      [["fly"], "fly"],
      [["gypsy"], "gypsy"],
      [["crypt"], "crypt"],
    ])("returns unchanged string", (params, right) => {
      expect(cb.apply(null, params)).to.equal(right);
    });
  });

  describe("when passed string is empty", () => {
    it("returns unchanged string", () => {
      expect(cb("")).to.equal("");
    });
  });
});
