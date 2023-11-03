/**
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward. Alphanumeric characters include letters
 * and numbers.
 *
 */

export function isPalindrome(s: string): boolean {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (isValidChar(s[leftPointer]!)) {
      if (isValidChar(s[rightPointer]!)) {
        if (isDifferentChar(s[leftPointer]!, s[rightPointer]!)) return false;
        leftPointer++;
        rightPointer--;
      } else {
        rightPointer--;
      }
    } else {
      leftPointer++;
    }
  }

  return true;
}

function isDifferentChar(a: string, b: string): boolean {
  return a.toLowerCase() !== b.toLowerCase();
}

function isValidChar(s: string): boolean {
  return !!s.match(/^[a-z0-9]+$/i);
}
