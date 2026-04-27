//======== Challenge 2: Age Checker ============== //
// Write a javaScript program that prompts a user to enter their year of birth
// and in turn prints a string in the console stating whether the user  is a
// minor, a youth or an elder.  Anyone below 18 years is a minor, anyone between
// 18 and 36 years of age is a youth and the rest are elders.

// TODO 1: Get year of birth input from the user
let birthYear = prompt("Enter your year of birth");

// TODO 2: Get current year
let date = new Date();
let currentYear = date.getFullYear();

// TODO 3: Get age of the user save it to ageUser
let age = currentYear - Number(birthYear);

// TODO 4: Check if the age of the user is below 18 years and print minor
if (age < 18) {
  console.log(`Your age is ${age} and your are a minor`);
}
// TODO 5: Check if the age of the user is below 36 years, and print youth
else if (age < 36) {
  console.log(`Your age is ${age} and your are a youth`);
}
// TODO 6: If the age of the user is neither below 18 nor 36, print elder
else {
  console.log(`Your age is ${age} and your are an elder`);
}
