let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].flag);
       
    }
     
}
// send the http request
xhr.send();