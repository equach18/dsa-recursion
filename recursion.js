/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, currMax = 0) {
  if (i === words.length) return currMax;
  currMax = Math.max(words[i].length, currMax);
  return longest(words, i + 1, currMax);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  if (i >= str.length) return newStr;
  newStr += str[i];
  return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let left = i;
  let right = str.length - i - 1;
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currIdx = 0) {
  if (currIdx === arr.length) return -1;
  if (val === arr[currIdx]) return currIdx;
  return findIndex(arr, val, currIdx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, newStr = "") {
  if (str.length === newStr.length) return newStr;
  newStr += str[str.length - 1 - i];
  return revString(str, i + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strArr = strArr.concat(gatherStrings(obj[key]));
    }
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  } else return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
