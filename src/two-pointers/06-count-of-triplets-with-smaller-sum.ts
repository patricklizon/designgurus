/*
 * Given an array arr of unsorted numbers and a target sum, count all triplets
 * in it such that `arr[i] + arr[j] + arr[k] < target` where `i`, `j`, and `k`
 * are three different indices.
 *
 * Write a function to return the count of such triplets.
 *
 */

type Result = number;

export function searchTriplets(xs: number[], targetSum: number): Result {
  const { length } = xs;
  if (length < 3) return NaN;

  const sorted = xs.toSorted();
  let count = 0;
  let lPointer: number | undefined;
  let rPointer: number | undefined;
  let sum: number | undefined;

  for (let idx = 0; idx < length - 2; idx++) {
    lPointer = idx + 1;
    rPointer = length - 1;

    while (lPointer < rPointer) {
      sum = sorted[idx]! + sorted[lPointer]! + sorted[rPointer]!;

      if (sum >= targetSum) {
        rPointer--;
      } else {
        count += rPointer - lPointer;
        lPointer++;
      }
    }
  }

  return count;
}
