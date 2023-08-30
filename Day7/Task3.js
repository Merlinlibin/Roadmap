let XMLHttpRequest = require("xhr2");

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open("GET", "https://restcountries.com/v3.1/all");

// handle the response data
xhr.onload = function () {
  let data = JSON.parse(xhr.responseText);

  data.forEach((value) => {
    console.log("Country Info :");
    console.log(`The country Name : ${value.name.common} `);
    console.log(`The country capital : ${value.capital} `);
    console.log(`The country flag : ${value.flag} `);
    console.log("");
  });
};
// send the http request
xhr.send();
