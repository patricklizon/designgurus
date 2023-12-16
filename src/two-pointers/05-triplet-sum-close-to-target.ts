/*
 * Given an array of unsorted numbers and a target number, find a triplet in
 * the array whose sum is as close to the target number as possible, return the
 * sum of the triplet.
 *
 * If there are more than one such triplet, return the sum of the triplet with
 * the smallest sum.
 *
 */

type Result = number;

export function searchTriplets(xs: number[], targetSum: number): Result {
  if (xs.length < 3) return NaN;

  const arr = xs.toSorted();
  const { length } = arr;
  let lPointer: number | undefined;
  let rPointer: number | undefined;
  let smallestDifference = Infinity;
  let targetDiff = Infinity;

  for (let idx = 0; idx < length - 2; idx++) {
    lPointer = idx + 1;
    rPointer = length - 1;

    while (lPointer < rPointer) {
      targetDiff = targetSum - arr[idx]! - arr[lPointer]! - arr[rPointer]!;
      if (targetDiff === 0) return targetSum;

      if (
        Math.abs(targetDiff) < Math.abs(smallestDifference) ||
        (Math.abs(targetDiff) === Math.abs(smallestDifference) &&
          targetDiff > smallestDifference)
      ) {
        smallestDifference = targetDiff;
      }

      if (targetDiff <= 0) rPointer--;
      else lPointer++;
    }
  }

  return targetSum - smallestDifference;
}
