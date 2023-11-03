/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 */
export function numGoodPairs(xs: number[]): number {
  let pairCount = 0;
  let dict: Record<number, number> = {};

  for (const x of xs) {
    dict[x] = (dict[x] ?? 0) + 1;
    // @ts-expect-error: value was assigned above
    pairCount += dict[x] - 1;
  }

  return pairCount;
}
