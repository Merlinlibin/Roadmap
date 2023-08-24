// Convert all the strings to title caps in a string array

let array = ["merlin", "libin", "ajay", "cedric"];

//Arrow function

let string = (ip) => {
  let op = [];
  for (i = 0; i < ip.length; i++) {
    op.push(ip[i].charAt(0).toUpperCase() + ip[i].slice(1));
  }
  return op;
};

console.log("Arrow function = ", string(array));
