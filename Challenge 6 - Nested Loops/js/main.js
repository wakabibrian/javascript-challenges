//======== Challenge 6: 3X3 Grid ============== //
/* 
Output:
(1,1) (1,2) (1,3) 
(2,1) (2,2) (2,3) 
(3,1) (3,2) (3,3) 
*/

console.log("===============3X3 Grid============");
// TODO 1: Outer loop 1 to 3
// TODO 2: Inner loop 1 to 3
// TODO 3: Inside outer loop, declare variable row
// TODO 4: Inside inner loop, contenate (outerIterable,innerIterable) to variable row
// TODO 5: Inside outer loop, log variable row

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += `(${i},${j}) `;
  }
  console.log(row);
}

//======== Challenge 6: Multiplication Table ============== //
/*
Write a program that prints the multiplication tables from 0 to 9.

For each number (0–9), display its multiplication results from 0 to 9
in the format shown below:

-------- Multiplication of 0
0 X 0 = 0
0 X 1 = 0
...
0 X 9 = 0

-------- Multiplication of 1
1 X 0 = 0
1 X 1 = 1
...
1 X 9 = 9

...

-------- Multiplication of 9
9 X 0 = 0
9 X 1 = 9
...
9 X 9 = 81
*/

console.log("\n\n");
console.log("===============Multiplication Table============");
// TODO 1: Outer loop 0 - 9
// TODO 2: Innter loop 0 - 9
// TODO 3: Inside Outer loop, log; -------- Multiplication of outerIterable
// TODO 4: Inside Inner loop, log; "outerIterable X innerIterable =" outerIterable * innerIterable
for (let i = 0; i <= 9; i++) {
  console.log(`-------- Multiplication of ${i}`);
  for (let j = 0; j <= 9; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
  console.log("\n");
}
