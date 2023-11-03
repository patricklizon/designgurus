/**
 * Given an array of strings words and two different strings that already
 * exist in the array word1 and word2, return the shortest distance between
 * these two words in the list.
 *
 */

export function shortestDistance(ws: string[], a: string, b: string): number {
  let aPosition = -1;
  let bPosition = -1;
  let distance = ws.length - 1;

  for (let idx = 0; idx < ws.length; idx++) {
    if (ws[idx] === a) aPosition = idx;
    else if (ws[idx] === b) bPosition = idx;

    if (
      aPosition >= 0 &&
      bPosition >= 0 &&
      Math.abs(aPosition - bPosition) < distance
    ) {
      distance = Math.abs(aPosition - bPosition);
    }
  }

  if (aPosition < 0 || bPosition < 0) return -1;

  return distance;
}
