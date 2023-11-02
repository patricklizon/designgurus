/*
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 */

/**
 *
 * Solution with storing values in Set()
 */
export function containsDuplicates0(xs: readonly number[]): boolean {
  let store = new Set<number>();

  for (const x of xs) {
    if (store.has(x)) return true;
    store.add(x);
  }

  return false;
}

/**
 *
 * Solution with sorting the array
 */

export function containsDuplicates1(xs: readonly number[]): boolean {
  const sorted = xs.toSorted();
  let store: undefined | number;
  for (const x of sorted) {
    if (store === undefined) {
      store = x;
      continue;
    }

    if (x === store) return true;
    else store = x;
  }

  return false;
}
