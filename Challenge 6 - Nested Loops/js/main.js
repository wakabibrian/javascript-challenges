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
// TODO 4: Inside inner loop, contenate (outerLoop,innerLoop) to variable row
// TODO 5: Inside outer loop, log variable row

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += `(${i},${j}) `;
  }
  console.log(row);
}
