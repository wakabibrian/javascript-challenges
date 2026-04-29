//======== Challenge 5: Return an array of Even numbers ============== //
// Given an array containing integers, floats, and one-character strings, write a function
// that takes an array as a parameter and returns an Object with keys evens, odds, and chars.
// The value for evens is an array of sorted even numbers, the value for odds is a list of
// sorted odd numbers, and chars is a list of sorted single-character strings.

// function assorted(arr) {
//   assortedObj = {
//     evens: [],
//     odds: [],
//     chars: [],
//   };

//   for (el of arr) {
//     if (typeof el === "number" || typeof el === "float") {
//       if (el % 2 === 0) {
//         assortedObj["evens"].push(el);
//       } else {
//         assortedObj["odds"].push(el);
//       }
//     } else if (typeof el === "string") {
//       assortedObj["chars"].push(el);
//     }
//   }

//   return assortedObj;
// }

// console.log(assorted([1, 2, 4, 8.8, 2.4, "s", "t"]));

//======== DOM - CRUD ============== //
// let name = document.getElementById("name");
// name.textContent = "Wakabi Brian";

// Numbers
let yearOfBirth = 1995;
const numberOfEggs = 36;
// let age = 25;
// console.log(typeof yearOfBirth);
// console.log(typeof age);

// String
let dateOfBirth = "1995";
let place = "Kampala";
place = "Nalya";

// boolean
let isBright = true;
let isShort = false;
// console.log(typeof isBright);

// let x = 12 === 0;
// console.log(x);

// console.log("A" < "a");

// Null & Undefined
let age = null;
console.log(age);

// Primitive & Non-primitive
let number = 24;
let name = "Lionel";

// array
let arry = ["Wakabi", "Esther", 30, 40, false];
console.log(arry[3]);
console.log(arry[1]);

// objects
let student = {
  name: "Lionel",
  marks: 98,
  isMale: true,
};

console.log(student.name);
console.log(student.marks);
