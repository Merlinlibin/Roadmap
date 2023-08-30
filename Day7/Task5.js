let XMLHttpRequest = require("xhr2");

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open("GET", "https://restcountries.com/v3.1/all");

// handle the response data
xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);
  let usArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].currencies != undefined) {
      if (data[i].currencies.USD != undefined) {
        usArray.push(data[i]);
      }
    }
  }
  usArray.forEach((value) => {
    console.log(
      "The country using US Dollor as currency is : ",
      value.name.common
    );
  });
};
// send the http request
xhr.send();
