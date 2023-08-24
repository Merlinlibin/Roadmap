// Sum of all numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Arrow function

let sum =  (ip) => {
  let op = 0;
  for (i = 0; i < ip.length; i++) {
    op = op + ip[i];
  }
  return op;
};

console.log("Arrow Function = ", sum(array));
