/*
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
 * and upper cases, more than once.
 *
 */

export function reverseVowels(s: string): string {
  const chars = s.split("");
  let leftPointer = 0;
  let rightPointer = chars.length - 1;
  let leftChar: undefined | string;
  let rightChar: undefined | string;

  while (leftPointer < rightPointer) {
    leftChar = chars[leftPointer];
    rightChar = chars[rightPointer];
    if (leftChar === undefined || rightChar === undefined) {
      throw new Error("character outside of the string");
    }

    if (isVowel(leftChar)) {
      if (isVowel(rightChar)) {
        //@ts-expect-error: swap on the array, characters exists
        [chars[leftPointer], chars[rightPointer]] = [
          chars[rightPointer],
          chars[leftPointer],
        ];

        leftPointer++;
        rightPointer--;
        continue;
      } else {
        rightPointer--;
      }
    } else {
      leftPointer++;
    }
  }

  return chars.join("");
}

const vowels = new Set(["a", "e", "i", "o", "u"]);

function isVowel(c: string): boolean {
  return vowels.has(c.toLowerCase());
}
