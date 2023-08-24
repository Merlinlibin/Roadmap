// Sum of all numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//anonymous function

let sum = function (ip) {
  let op = 0;
  for (i = 0; i < ip.length; i++) {
      op = op + ip[i];
  }
  return op;
};

console.log("Anonymous = ", sum(array));

//IIFE function

console.log(
  "IIFE = ",
  ((ip) => {
    let op = 0;
    for (i = 0; i < ip.length; i++) {
      op = op + ip[i];
    }
    return op;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9])
);
