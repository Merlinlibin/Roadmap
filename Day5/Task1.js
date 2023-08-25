let XMLHttpRequest = require("xhr2");

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open("GET", "https://restcountries.com/v3.1/all");

// handle the response data
xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);
  // For loop:

  for (let i = 0; i < data.length; i++) {
    console.log(data);
  }

  // For in :

  for (const key in data) {
    console.log(data[key]);
  }

  // For of :

  for (const value of data) {
    console.log(value);
  }

  // For each :

  data.forEach((eachvalue) => {
    console.log(eachvalue);
  });
};
// send the http request
xhr.send();
