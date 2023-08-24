// Return all the palindromes in an array

let array = ["merlin", "madam", "ajay", "dad"];

//Arrow function

let string =  (ip) => {
  let op = [];
  for (let index = 0; index < ip.length; index++) {
    let len = ip[index].split("").reverse().join("");

    if (len == ip[index]) {
      op.push(len);
    }
  }
  return op;
};

console.log("Arrow Function = ", string(array));
