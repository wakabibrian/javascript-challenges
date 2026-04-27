//======== Challenge 1: FizzBuzz ============== //
// Write a function named fizzBuzz that takes two(2) strings
// and returns Fizz if the combined length of the strings is
// divisible by 3,  Buzz if it is divisible by 5, FizzBuzz if
// it is divisible by both 5 and 3.

function fizzBuzz(str1, str2) {
  // TODO 1: Combine str1 and str2 and store the result in a variable
  let str = str1 + str2;
  // TODO 2: Find the length of the combined string
  lengthOfString = str.length;
  // TODO 3: Check if length is divisible by both 5 and 3 and return FizzBuzz
  if (lengthOfString % 3 === 0 && lengthOfString % 5 === 0) {
    return "FizzBuzz";
  }
  // TODO 4: Check if length is divisible by 3 and return Fizz
  else if (lengthOfString % 3 === 0) {
    return "Fizz";
  }
  // TODO 5: Check if length is divisible by 5 and return Buzz
  else if (lengthOfString % 5 === 0) {
    return "Buzz";
  }
  // TODO 6: Return the string "Neither divisible by 3 nor 5" is none of the conditions apply
  else {
    return "Neither divisible by 3 nor 5";
  }
}

console.log(fizzBuzz("Wakabi", "Brian"));
console.log(fizzBuzz("Miracle", "Atukwasa"));
console.log(fizzBuzz("Lionel", "William"));
console.log(fizzBuzz("Bri", "Wak"));
console.log(fizzBuzz("Bri", "Wa"));
