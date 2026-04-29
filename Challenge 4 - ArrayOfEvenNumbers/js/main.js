//======== Challenge 4: Return an array of Even numbers ============== //
// Write a function filterEven(arr) that returns an array of even numbers.
// The function expects a parameter arr which is an array of elements.
// (use filter array method)

function filterEven(arr) {
  // TODO 1: Use filter method - only elements modulus 2 === 0, store in a variable
  let filteredEls = arr.filter((el) => el % 2 === 0);
  // TODO 2: Return the variable
  return filteredEls;
}

console.log(filterEven([1, 2, 3, 4]));
