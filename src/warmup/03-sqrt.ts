/*
 * Given a non-negative integer x, return the square root of x rounded down to
 * the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 */

export function sqrt(x: number): number {
  if (x < 0) return NaN;
  if (x < 2) return x;

  let leftPointer = 2;
  let rightPointer = Math.floor(x / 2);
  let middle: undefined | number;
  let result: undefined | number;

  // binary search
  while (leftPointer <= rightPointer) {
    middle = leftPointer + Math.floor((rightPointer - leftPointer) / 2); // middle value between pointers
    result = middle * middle;

    if (result > x) rightPointer = middle - 1;
    else if (result < x) leftPointer = leftPointer + 1;
    else return middle;
  }

  return rightPointer;
}
