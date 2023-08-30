let XMLHttpRequest = require("xhr2");

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open("GET", "https://restcountries.com/v3.1/all");

// handle the response data
xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);

  let op = data.filter((value, index) => {
    if (data[index].population <= 200000) {
      return data;
    }
  });

  op.forEach((value) => {
    console.log(
      `The country "${value.name.common}" with the population of "${value.population}"`
    );
  });
};
// send the http request
xhr.send();
