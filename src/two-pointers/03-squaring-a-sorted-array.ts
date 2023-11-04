/**
 * Given a sorted array, create a new array containing squares of all the
 * numbers of the input array in the sorted order.
 *
 */

export function makeSquares(xs: number[]): number[] {
  const { length } = xs;
  const squares = Array.from({ length }, () => 0);

  let lP = 0;
  let rP = length - 1;
  let assignToIdx = length - 1;

  let lSq: number | undefined;
  let rSq: number | undefined;

  while (lP <= rP) {
    // @ts-expect-error: value exists
    lSq = xs[lP] ** 2;
    // @ts-expect-error: value exists
    rSq = xs[rP] ** 2;

    if (rSq >= lSq) {
      squares[assignToIdx] = rSq;
      rP--;
    } else {
      squares[assignToIdx] = lSq;
      lP++;
    }

    assignToIdx--;
  }

  return squares;
}
