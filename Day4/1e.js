// Return all the palindromes in an array

let array = ["merlin", "madam", "ajay", "dad"];

//anonymous function

let string = function (ip) {
  let op = [];
  for (let index = 0; index < ip.length; index++) {
    let len = ip[index].split("").reverse().join("");

    if (len == ip[index]) {
      op.push(len);
    }
  }
  return op;
};

console.log("Anonymous = ", string(array));

//IIFE function

console.log(
  "IIFE = ",
  ((ip) => {
    let op = [];
    for (let index = 0; index < ip.length; index++) {
      let len = ip[index].split("").reverse().join("");

      if (len == ip[index]) {
        op.push(len);
      }
    }
    return op;
  })(["geo", "vijin", "dad", "mam"])
);
