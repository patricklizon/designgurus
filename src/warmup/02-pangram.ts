/*
 * A pangram is a sentence where every letter of the English alphabet appears
 * at least once.
 * Given a string sentence containing English letters (lower or upper-case),
 * return true if sentence is a pangram, or false otherwise.
 *
 * **Note:** The given sentence might contain other characters like digits or
 * spaces, your solution should handle these too.
 */
export function pangram(s: string): boolean {
  const startCode = "a".charCodeAt(0);
  const endCode = "z".charCodeAt(0);
  const countOfLettersInAlphabet = endCode - startCode + 1;
  const store = new Set<string>();

  for (const c of s.toLowerCase()) {
    store.add(c);
    if (store.size === countOfLettersInAlphabet) return true;
  }

  return false;
}
