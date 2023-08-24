//Rotate an array by k times

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = [3];

//anonymous function

let oddnum = function (ip, count) {
  for (let index = 1; index <= parseInt(count[0]); index++) {
    let data = array.shift();
    ip.push(data);
    //return ip;
  }
  return ip;
};

console.log("Anonymous = ", oddnum(array, num));

//IIFE function

console.log(
  "IIFE = ",
  ((ip, count) => {
    for (let index = 1; index <= parseInt(count[0]); index++) {
      let data = ip.shift();
      ip.push(data);
      //return ip;
    }
    return ip;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9], [2])
);
