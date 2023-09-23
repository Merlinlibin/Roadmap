

let div = document.createElement('div');
div.setAttribute("class", "container-fluid m-0 p-0");
div.setAttribute("style", "width: 100%;height: 100%;background-color: rgb(47, 62, 70);");

let row = document.createElement("div");
    row.setAttribute("class", "row");

// FIRST COL -----------------------------------------------------------------------------

let col1 = document.createElement("div");
    col1.setAttribute("class","col-md-4 d-flex align-items-center justify-content-center p-1");
    
let card1 = document.createElement("div");
card1.setAttribute("class", "card text-center mt-5 mb-5");
card1.setAttribute("style", "width: 95%;height:85%; background-image: linear-gradient(to right,rgb(213, 213, 213), rgb(92, 92, 90));");

// FIRST CARD --------------------------------

let cName1 = document.createElement("h5");
cName1.setAttribute(
  "class",
  "card-title d-flex align-items-center justify-content-center"
);
cName1.setAttribute(
  "style",
  "width: 100%;height: 3rem;background-color: black;color:white;font-size: 17px;"
);
cName1.textContent = "Afghanistan"; //-----------------------------------REMOVE------------------

let image1 = document.createElement("img");
image1.setAttribute(
  "class",
  "card-img-top d-flex align-items-center justify-content-center"
);
image1.setAttribute("style", "width: auto;height: auto;margin: 20px;border-radius: 5px;");
image1.setAttribute("src", "https://flagcdn.com/ax.svg"); //----------------REMOVE-----------------

let card_detail1 = document.createElement("div");
card_detail1.setAttribute("class", "card-body");
card_detail1.setAttribute("style", "color: white;font-size: 18px;");

    let capital1 = document.createElement("p");
    capital1.setAttribute("class", "card-tex");
    capital1.textContent = "Capital: Kabul";//----------------------------REMOVE--------------------

    let region1 = document.createElement("p");
    region1.setAttribute("class", "card-tex");
    region1.textContent = "Region: Asia";//--------------------------------REMOVE-------------------

    let cCode1 = document.createElement("p");
    cCode1.setAttribute("class", "card-tex");
    cCode1.textContent = "Country code: AGF";//-----------------------------REMOVE------------------

    let button1 = document.createElement("a");
    button1.setAttribute("class", "btn");
    button1.setAttribute(
      "style",
      "color: white;border: 1px solid ;font-size: 13px;margin-bottom: 60px;"
    );
    button1.setAttribute('onClick', "event1()");
    button1.innerText = "Click for Weather";//---------------------------------------------

// adding details to card 1 ---------------------------------------------------------------
card_detail1.append(capital1, region1, cCode1, button1);
card1.append(cName1, image1, card_detail1);

// SECOND COL -----------------------------------------------------------------------------

let col2 = document.createElement("div");
col2.setAttribute(
  "class",
  "col-md-4 d-flex align-items-center justify-content-center p-1"
);

let card2 = document.createElement("div");
card2.setAttribute("class", "card text-center mt-5 mb-5 ");
card2.setAttribute(
  "style",
  "width: 95%;height:85%; background-image: linear-gradient(to right,rgb(213, 213, 213), rgb(92, 92, 90));"
);


// SECOND CARD --------------------------------

let cName2 = document.createElement("h5");
cName2.setAttribute(
  "class",
  "card-title d-flex align-items-center justify-content-center"
);
cName2.setAttribute(
  "style",
  "width: 100%;height: 3rem;background-color: black;color:white;font-size: 17px;"
);
cName2.textContent = "Afghanistan"; //------------------------------------REMOVE-----------------

let image2 = document.createElement("img");
image2.setAttribute(
  "class",
  "card-img-top "
);
image2.setAttribute(
  "style",
  "width: auto;height: auto;margin: 20px;border-radius: 5px;"
);
image2.setAttribute("src", "https://flagcdn.com/ax.svg"); //--------------REMOVE-------------------

let card_detail2 = document.createElement("div");
card_detail2.setAttribute("class", "card-body");
card_detail2.setAttribute("style", "color: white;font-size: 18px;");

    let capital2 = document.createElement("p");
    capital2.setAttribute("class", "card-tex");
    capital2.textContent = "Capital: Kabul";//-----------------------------REMOVE-------------------

    let region2 = document.createElement("p");
    region2.setAttribute("class", "card-tex");
    region2.textContent = "Region: Asia";//----------------------------------REMOVE-----------------

    let cCode2 = document.createElement("p");
    cCode2.setAttribute("class", "card-tex");
    cCode2.textContent = "Country code: AGF";//-------------------------------REMOVE----------------

    let button2 = document.createElement("a");
    button2.setAttribute("class", "btn");
    button2.setAttribute(
      "style",
      "color: white;border: 1px solid ;font-size: 13px;margin-bottom: 60px;"
    );
    button2.setAttribute("onClick", "event2()");
    button2.innerText = "Click for Weather";//---------------------------------------------

// adding details to card 2 ---------------------------------------------------------------
card_detail2.append(capital2, region2, cCode2, button2);
card2.append(cName2, image2, card_detail2);

// TIRD COL -----------------------------------------------------------------------------

let col3 = document.createElement("div");
col3.setAttribute(
  "class",
  "col-md-4 d-flex align-items-center justify-content-center p-1"
);

let card3 = document.createElement("div");
card3.setAttribute(
  "class",
  "card text-center mt-5 mb-5 "
);
card3.setAttribute(
  "style",
  "width: 95%;height: 85%; background-image: linear-gradient(to right,rgb(213, 213, 213), rgb(92, 92, 90));"
);


// Third CARD --------------------------------

let cName3 = document.createElement("h5");
cName3.setAttribute(
  "class",
  "card-title d-flex align-items-center justify-content-center "
);
cName3.setAttribute(
  "style",
  "width: 100%;height: 3rem;background-color: black;color:white;font-size: 17px;"
);
cName3.textContent = "Afghanistan"; //--------------------------------------REMOVE---------------

let image3 = document.createElement("img");
image3.setAttribute("class", "card-img-top ");
image3.setAttribute(
  "style",
  "margin: 20px;border-radius: 5px;width:auto;"
);
image3.setAttribute("src", "https://flagcdn.com/ax.svg"); //------------------REMOVE---------------

let card_detail3 = document.createElement("div");
card_detail3.setAttribute("class", "card-body ");
card_detail3.setAttribute("style", "color: white;font-size: 18px;");

    let capital3 = document.createElement("p");
    capital3.setAttribute("class", "card-tex");
    capital3.textContent = "Capital: Kabul";//--------------------------------REMOVE----------------

    let region3 = document.createElement("p");
    region3.setAttribute("class", "card-tex");
    region3.textContent = "Region: Asia";//-----------------------------------REMOVE----------------

    let cCode3 = document.createElement("p");
    cCode3.setAttribute("class", "card-tex");
    cCode3.textContent = "Country code: AGF";//-------------------------------REMOVE----------------

    let button3 = document.createElement("a");
    button3.setAttribute("class", "btn");
    button3.setAttribute(
      "style",
      "color: white;border: 1px solid ;font-size: 13px;margin-bottom: 60px;"
    );
    button3.setAttribute("onClick", "event3()");
    button3.innerText = "Click for Weather";//---------------------------------------------

// adding details to card 3 ---------------------------------------------------------------
card_detail3.append(capital3, region3, cCode3, button3);
card3.append(cName3, image3, card_detail3);

col3.appendChild(card3);
col2.appendChild(card2)
col1.appendChild(card1);
row.append(col1,col2,col3);
div.appendChild(row);
document.body.appendChild(div);


let weatherData = [
  "https://api.openweathermap.org/data/2.5/weather?q=Kabul&APPID=527c6631c8a55167604c77920fe61a70",
  "https://api.openweathermap.org/data/2.5/weather?q=Mariehamn&APPID=527c6631c8a55167604c77920fe61a70",
  "https://api.openweathermap.org/data/2.5/weather?q=Tirana&APPID=527c6631c8a55167604c77920fe61a70",
];
fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let country = ["Afghanistan", "Åland Islands", "Albania"];
    let countryData = [];
    data.forEach((element) => {
      if (country.includes(element.name.common)) {
        countryData.push(element);
      }
    });
    return countryData;
  })
  .then((cData) => {
    let country = [];
    let flag = [];
    let capital = [];
    let region = [];
    let ccode = [];
    cData.forEach((element) => {
      country.push(element.name.common);
      flag.push(element.flags.svg);
      capital.push(element.capital[0]);
      region.push(element.region);
      ccode.push(element.cca3);
    });
      cName1.textContent = country[2];
      cName2.textContent = country[1];
      cName3.textContent = country[0];

      image1.setAttribute(
        "src",
        `https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Afghanistan_%282004%E2%80%932013%29.png`
      );
      image2.setAttribute("src", `${flag[1]}`);
      image3.setAttribute("src", `${flag[0]}`);

      capital1.textContent = `Capital: ${capital[2]}`;
      capital2.textContent = `Capital: ${capital[1]}`;
      capital3.textContent = `Capital: ${capital[0]}`;

      region1.textContent = `Region: ${region[2]}`;
      region2.textContent = `Region: ${region[1]}`;
      region3.textContent = `Region: ${region[0]}`;

      cCode1.textContent = `Country Code: ${ccode[2]}`;
      cCode2.textContent = `Country Code: ${ccode[1]}`;
      cCode3.textContent = `Country Code: ${ccode[0]}`;


  });

function event1()  {
  fetch(`${weatherData[0]}`).then((response) => {
    return response.json();
  }).then((data) => {
    button1.innerText = `Temp: ${Math.round(data.main.temp - 270)}°C
                     Humidity: ${data.main.humidity}%`;
  });
  setTimeout(() => {
    button1.innerText = "Click for Weather";
  }, 5000);
  }
function event2() {
  fetch(`${weatherData[1]}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      button2.innerText = `Temp: ${Math.round(data.main.temp - 270)}°C
                     Humidity: ${data.main.humidity}%`;
    });
  setTimeout(() => {
    button2.innerText = "Click for Weather";
  }, 3000);
}
function event3() {
  fetch(`${weatherData[2]}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      button3.innerText = `Temp: ${Math.round(data.main.temp - 270)}°C
                     Humidity: ${data.main.humidity}%`;
    });
  setTimeout(() => {
    button3.innerText = "Click for Weather";
  }, 3000);
}



