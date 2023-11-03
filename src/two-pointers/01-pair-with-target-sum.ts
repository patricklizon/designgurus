/*
 * Given an array of numbers sorted in ascending order and a target sum,
 * find a pair in the array whose sum is equal to the given target.
 * Write a function to return the indices of the two numbers (i.e. the pair)
 * such that they add up to the given target.
 *
 */

/**
 * Solution with two pointers
 */

export function pairWithTargetSum0(
  xs: number[],
  target: number
): [idx: number, idx: number] {
  let leftPointer = 0;
  let rightPointer = xs.length - 1;
  let sum;

  while (leftPointer < rightPointer) {
    sum = (xs[leftPointer] ?? 0) + (xs[rightPointer] ?? 0);
    if (sum < target) leftPointer++;
    else if (sum > target) rightPointer--;
    else return [leftPointer, rightPointer];
  }

  return [-1, -1];
}
/**
 * Solution with hash map
 */

export function pairWithTargetSum1(
  xs: number[],
  target: number
): [idx: number, idx: number] {
  const dict: Record<number, number> = {};

  let currentValue;
  let missingValue;

  for (let idx = 0; idx < xs.length; idx++) {
    currentValue = xs[idx]!;
    dict[currentValue] ??= idx;
    missingValue = target - currentValue;

    if (missingValue in dict && dict[missingValue] !== idx) {
      return [dict[missingValue]!, dict[currentValue]!];
    }
  }

  return [-1, -1];
}
