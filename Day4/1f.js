//Return median of two sorted arrays of the same size.

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

//anonymous function

let oddnum = function (ip1, ip2) {
  let data = ip1.concat(ip2);
  let length = (data.length - 1) / 2,
    b = length.toFixed(0),
    a = b - 1;
  let op = (data[a] + data[b]) / 2;
  return op.toFixed(0);
};

console.log("Anonymous = ", oddnum(array1, array2));

//IIFE function

console.log(
  "IIFE = ",
  ((ip1, ip2) => {
    let data = ip1.concat(ip2);
    let length = (data.length - 1) / 2,
      b = length.toFixed(0),
      a = b - 1;
    let op = (data[a] + data[b]) / 2;
    return op.toFixed(0);
  })([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
);
