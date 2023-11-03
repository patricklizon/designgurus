/**
 *
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of
 * a different word or phrase, typically using all the original letters
 * exactly once.
 */

export function isAnagram(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  const dict: Record<string, number> = {};
  let aKey: undefined | string;
  let bKey: undefined | string;

  for (let idx = 0; idx < a.length; idx++) {
    aKey = a[idx];
    bKey = b[idx];
    if (aKey === undefined || bKey === undefined) {
      throw new Error("out of range of the input");
    }

    dict[aKey] = (dict[aKey] ?? 0) + 1;
    dict[bKey] = (dict[bKey] ?? 0) - 1;
  }

  for (const key in dict) if (dict[key] !== 0) return false;
  return true;
}
