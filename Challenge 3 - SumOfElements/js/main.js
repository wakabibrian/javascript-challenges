//======== Challenge 3: Sum of All Elements In an Array ============== //
// Write a function sumArray(arr) that returns the sum of all elements
// in an array. The function expects a parameter arr which is an array of
// elements (use forEach or reduce array methods)

//=== forEach Method
function sumArray(arr) {
  // TODO 1: Initialise sum to zero
  let sum = 0;

  // TODO 2: Use foreach to sum the elements while adding all elements to the initialise
  arr.forEach((el) => {
    sum += el;
  });

  // TODO 3: Return the sum
  return sum;
}

console.log(sumArray([1, 2, 3, 4]));

//== Reduce Method
function sumArrayRed(arr) {
  // TODO 1: Use reduce method with an initial value store it to variable sum
  let sum = arr.reduce((acc, x) => acc + x, 0);
  // TODO 2: Return sum
  return sum;
}

console.log(sumArrayRed([1, 2, 3, 4]));
