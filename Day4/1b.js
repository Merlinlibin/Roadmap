// Convert all the strings to title caps in a string array


let array = ['merlin','libin','ajay','cedric'];

//anonymous function

let string = function (ip) {
  let op = [];
    for (i = 0; i < ip.length;i++) {
      op.push(ip[i].charAt(0).toUpperCase() + ip[i].slice(1)); 
  }
   return op;
  
};

console.log("Anonymous = ", string(array));


//IIFE function

console.log(
  "IIFE = ",
    ((ip) => {
      let op = [];
      for (i = 0; i < ip.length; i++) {
        op.push(ip[i].charAt(0).toUpperCase() + ip[i].slice(1));
      }
      return op;
    })(["geo", "vijin", "arun", "renoj"]));
