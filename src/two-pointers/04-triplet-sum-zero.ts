/*
 * Given an array of unsorted numbers, find all unique triplets in it that
 * add up to zero.
 *
 */

type Result = [number, number, number][];

export function searchTriplets(xs: number[]): Result {
  const { length } = xs;
  if (length < 3) return [];

  const sorted = xs.toSorted((a, b) => a - b);
  const result: Result = [];

  let lP: number | undefined;
  let rP: number | undefined;

  let sum: number | undefined;

  for (let idx = 0; idx < sorted.length; idx++) {
    if (idx > 0 && sorted[idx] === sorted[idx - 1]) continue;

    lP = idx + 1;
    rP = length - 1;

    while (lP < rP) {
      sum = sorted[idx]! + sorted[lP]! + sorted[rP]!;

      if (sum > 0) rP--;
      else if (sum < 0) lP++;
      else {
        result.push([sorted[idx]!, sorted[lP]!, sorted[rP]!]);
        rP--;
        lP++;
      }
    }
  }

  return result;
}
