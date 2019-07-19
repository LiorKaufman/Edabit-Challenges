//
// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.
//
// Examples
// stepsToConvert("abC") ➞ 1
// // "abC" converted to "abc" in 1 step
//
// stepsToConvert("abCBA") ➞ 2
// // "abCBA" converted to "ABCBA" in 2 steps
//
// stepsToConvert("aba") ➞ 0
//
// stepsToConvert("abaCCC") ➞ 3

function numOfSteps (string) {
  let newArr = string.split('')
  let countUp = 0
  let countLower = 0
  for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === newArr[i].toLowerCase()) {
        countLower++
      } else if (newArr[i] === newArr[i].toUpperCase()) {
        countUp++
      }
  }
  if (string === '') {
    return 0
  }
  if (countUp > countLower) {
      return newArr.length - countUp
  } else if (countUp < countLower) {
    return newArr.length - countLower
  }
}

//
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
//
// Examples
// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
//
// removeDups([1, 0, 1, 0]) ➞ [1, 0]
//
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// Notes
// Test cases contain arrays with both strings and numbers.
// Case sensitive.

function removeDups(arr) {
  let aset = new Set (arr)
	return Array.from(aset)
}
