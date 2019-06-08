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
