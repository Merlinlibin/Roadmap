let XMLHttpRequest = require("xhr2");

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open("GET", "https://restcountries.com/v3.1/all");

// handle the response data
xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);

  let op = data.filter((value, index) => {
    if (
      data[index].continents[0] == "Asia" ||
      data[index].continents[1] == "Asia"
    ) {
      return data;
    }
  });

  op.forEach((value) => {
    console.log("The country with Asia continent is : ", value.name.common);
  });
};
// send the http request
xhr.send();
