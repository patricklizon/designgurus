/**
 * Given an array of sorted numbers, move all non-duplicate number instances
 * at the beginning of the array in-place. The relative order of the elements
 * should be kept the same and you should not use any extra space so that
 * the solution has constant space complexity i.e., `O(1)`.
 *
 * Move all the unique number instances at the beginning of the array and after
 * moving return the length of the subarray that has no duplicate in it.
 *
 */

export function findNonDuplicateNumberInstances(xs: number[]): number {
  if (!xs.length) return 0;

  let nextToReplace = 1;
  for (let idx = 0; idx < xs.length; idx++) {
    if (xs[nextToReplace - 1] === xs[idx]) continue;

    // @ts-expect-error: elements exist
    xs[nextToReplace] = xs[idx];
    nextToReplace++;
  }

  return nextToReplace;
}
