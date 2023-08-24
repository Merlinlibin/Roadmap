// Print odd numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Arrow function

let oddnum = (ip)=> {
  let op = [];
  for (const value of ip) {
    if (value % 2 === 1) {
      op.push(parseInt(value));
    }
  }
  return op;
};

console.log("Arrow fun = ", oddnum(array));
