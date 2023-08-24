// Return all the prime numbers in an array

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 199];

//anonymous function
let prime = function (array) {
  let op = [];
  function checkPrime(number) {
    if (number <= 1) {
      return true;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  array.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      //console.log(element + ' is a prime number');
      op.push(element);
    }
  });
  return op;
};
console.log(prime(Array));

//IIFE function

console.log(
  ((array) => {
    let op = [];
    function checkPrime(number) {
      if (number <= 1) {
        return true;
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            return false;
          }
        }
        return true;
      }
    }

    array.forEach(function (element) {
      const isPrime = checkPrime(element);
      if (isPrime) {
        //console.log(element + ' is a prime number');
        op.push(element);
      }
    });
    return op;
  })([1, 2, 3, 4, 5, 6, 7, 8, 199])
);
