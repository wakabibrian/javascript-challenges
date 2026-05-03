//======== Challenge 7: Find The Letter ============== //
/*
Code a function which will be able to take a word and locate the position of 
a chosen letter in that given word.  

Test
Here, you pass in the string "test" and the letter "t" to see how the function works.

Output:
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3
*/

// TODO 1: Declare a function letterFinder that accepts parameters; word and match
// TODO 2: Inside the function; loop through the word string.
// TODO 3: For each iteration, Check if the letter at that position is equal to the match and
//         output, Found the t at 0.
// TODO 4: else (if the letter at position i is not found), output, ---No match found at 1

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log(`Found the ${match} at ${i}`);
    } else {
      console.log(`---No match found at ${i}`);
    }
  }
}

letterFinder("test", "t");
