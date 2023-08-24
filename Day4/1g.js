//Remove duplicates from an array

let array = [1, 1, 3, 4, 1, 4, 1, 8, 8];

//anonymous function

function remove_duplicates(arr) {
  var obj = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  for (var key in obj) {
    ret_arr.push(key);
  }
  return ret_arr;
}

console.log("Anonymous = ", remove_duplicates(array));

//IIFE function

console.log(
  "IIFE = ",
  ((arr) => {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    for (var key in obj) {
      ret_arr.push(key);
    }
    return ret_arr;
  })([1, 1, 3, 4, 1, 4, 1, 8, 8])
);
