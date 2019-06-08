//
// Create a function that takes two numbers as arguments and return their sum.
//
// Examples
// addition(3, 2) ➞ 5
//
// addition(-3, -6) ➞ -9
//
// addition(7, 3) ➞ 10
console.log("Sum numbers Function");
const sumNums = (a,b) => a+b;

console.log(sumNums(5,4));
//
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
//
// Examples
// comp("AB", "CD") ➞ true
//
// comp("ABC", "DE") ➞ false
//
// // comp("hello", "edabit") ➞ false
console.log("Check if 2 strings have same amount of charecters ");
const sameNumOfChars = (a,b) => a.length !== b.length ? false:true

console.log(sameNumOfChars("ABC","DE"));
//
// Create a function that accepts an array and returns the last item in the array.
//
// Examples
// getLastItem([1, 2, 3]) ➞ 3
//
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
//
// getLastItem([true, false, true]) ➞ true

console.log("return last element of an array ");

const getLastItem = (arr) => { return arr.pop() }

console.log(getLastItem([1,2,3]));
//
// Write a function to check whether an array contains a particular element.
//
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
//
// check([1, 1, 2, 1, 1], 3) ➞ false
//
// check([5, 5, 5, 6], 5) ➞ true
//
// check([], 5) ➞ false

console.log("create a function to check if an array contains an element");

const check = (arr,element) => {
  return arr.includes(element)
}

console.log(check([1,2,3],3));
//
// Create a function that returns true if an integer is divisible by 5, and false otherwise.
//
// Examples
// divisibleByFive(5) ➞ true
//
// divisibleByFive(-55) ➞ true
//
// divisibleByFive(37) ➞ false
console.log("Function that checks if a number is divisible by 5 ");


const divisibleByFive = (num) => num%5 === 0 ? true:false

console.log(divisibleByFive(22))


// hasSpaces("hello") ➞ false
//
// hasSpaces("hello, world") ➞ true
//
// hasSpaces(" ") ➞ true
//
// hasSpaces("") ➞ false
//
// hasSpaces(",./!@#") ➞ false
console.log("Check if a string has a space in it ");

const hasSpaces = (str) => str.includes(" ")

console.log(hasSpaces("Hello World"));
//
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
//
// Create a function that takes in an array of names and returns the name of the secret society.
//
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
//
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
//
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.

console.log("Create a string from the first char of each string stored in an array ");

function societyName (friends){
  let x = friends.map((names) => names.charAt(0))
  return x.sort().join("")
}

console.log(societyName(["Harry","Tom","Omer"]));
//
// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
//
// [1, 3, 3, 5, 5, 5]
// // original array
//
// [1, 3, 5]
// // original array transformed into a set
// Create a function that transforms an array into a set.
//
// Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
//
// set([4, 4, 4, 4]) ➞ [4]
//
// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
// Notes
// Note: For this question, output an array, not a set. These are two distinctly different data structures in Javascript (although they can be converted from one to the other).

  console.log("create an array with unique values (a set)  but return it has an array ");
  function set (arr) {
    return [...new Set (arr)]
  }

console.log(set([4,5,5,4,2]));
//
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//
// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//
// minMax([2334454, 5]) ➞ [5, 2334454]
//
// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.

console.log("Function that return the min number and max number inside of an array");

function minMax (arr){
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([2,5,7]));

// another opotion:
// sorting the array and sending the first element of the array and the last
function minMax2 (arr){
  arr.sort((a,b) => {
    return a - b})
  return [arr[0], arr[arr.length-1]]
}

console.log(minMax2([2,66,88,1]));
//
// Create a function that returns the ASCII value of the passed in character.
//
// Examples
// ctoa("A") ➞ 65
//
// ctoa("m") ➞ 109
//
// ctoa("[") ➞ 91
//
// ctoa("\") ➞ 92

console.log("return ASCII value of the char passed to the function ");

function ctoa (char){
  return char.charCodeAt()
}

console.log(ctoa("A"));
//
// Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make this validator case insensitive.
//
// Examples
// match("hello", "hELLo") ➞ true
//
// match("motive", "emotive") ➞ false
//
// match("venom", "VENOM") ➞ true
//
// match("mask", "mAskinG") ➞ false

console.log("Check if 2 strings are identical and in a case insensitive manner");

function match (str1, str2){
  return str1.toLowerCase() === str2.toLowerCase()? true:false
}

console.log(match("hello","heLLo"));
//
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
//
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// The function will be in this form:
//
// equalSlices(total slices, no. recipients, slices each)
// Examples
// equalSlices(11, 5, 2) ➞ true
// // 5 people x 2 slices each = 10 slices < 11 slices
//
// equalSlices(11, 5, 3) ➞ false
// // 5 people x 3 slices each = 15 slices > 11 slices
//
// equalSlices(8, 3, 2) ➞ true
//
// equalSlices(8, 3, 3) ➞ false
//
// equalSlices(24, 12, 2) ➞ true

console.log("check if you have enough slices to share fairly ");

function equalSlices (total , people , each ){
  return each*people > total ? false:true
}

console.log(equalSlices(8,3,2));
