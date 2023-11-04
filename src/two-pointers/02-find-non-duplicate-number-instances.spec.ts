import { describe, expect, it } from "vitest";
import { findNonDuplicateNumberInstances } from "./02-find-non-duplicate-number-instances";

type Fn = typeof findNonDuplicateNumberInstances;
type InputExpectedPairs = [input: Parameters<Fn>, expected: ReturnType<Fn>];

describe.each([[1, findNonDuplicateNumberInstances]])(
  "solution %s",
  (_, cb) => {
    describe("when array contains duplicated number", () => {
      it.each<InputExpectedPairs>([
        [[[2, 3, 3, 3, 6, 9, 9]], 4], // [2, 3, 6, 9]
        [[[2, 2, 2, 11]], 2], // [2, 11]
      ])("returns length of sub array without duplicates", (params, right) => {
        expect(cb(...params)).to.equal(right);
      });
    });

    describe("when array does not contain duplicated numbers", () => {
      it.each<InputExpectedPairs>([
        [[[1, 2, 3, 4]], 4],
        [[[420]], 1],
        [[[]], 0],
      ])("returns length of the array", (params, right) => {
        expect(cb(...params)).to.equal(right);
      });
    });
  }
);
