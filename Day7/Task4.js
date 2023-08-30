let XMLHttpRequest = require("xhr2");

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open("GET", "https://restcountries.com/v3.1/all");

// handle the response data
xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);

  let pop = [];
  data.forEach((value) => {
    pop.push(value.population);
  });
  let thInitial = pop.reduce((fValue, sValue) => {
    return fValue + sValue;
  }, 0);

  console.log("The world Tolat Population is : ", thInitial);
};
// send the http request
xhr.send();
