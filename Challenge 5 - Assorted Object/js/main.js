//======== Challenge 5: Return an array of Even numbers ============== //
// Given an array containing integers, floats, and one-character strings, write a function
// that takes an array as a parameter and returns an Object with keys evens, odds, and chars.
// The value for evens is an array of sorted even numbers, the value for odds is a list of
// sorted odd numbers, and chars is a list of sorted single-character strings.

function assorted(arr) {
  assortedObj = {
    evens: [],
    odds: [],
    chars: [],
  };

  for (el of arr) {
    if (typeof el === "number" || typeof el === "float") {
      if (el % 2 === 0) {
        assortedObj["evens"].push(el);
      } else {
        assortedObj["odds"].push(el);
      }
    } else if (typeof el === "string") {
      assortedObj["chars"].push(el);
    }
  }

  return assortedObj;
}

console.log(assorted([1, 2, 4, 8.8, 2.4, "s", "t"]));
