// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// String concatenation approach
console.log("My first name is " + firstName + " and my last name is " + lastName);
// String interpolation approach
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2021";
const number = 1;

// Add the year plus the number
// The result should be 2022
// You cannot touch line 1 or 2

console.log(parseInt(year) + number);
console.log(Number(year) + number);
// Writing + in front of a String converts it to Number.
console.log(+year + number);
// --------------------------------------