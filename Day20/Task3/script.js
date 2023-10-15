let input = document.getElementById('input');
let button = document.getElementById('button');
let details = document.getElementById('details');

function countryDetail(data) {
  let countryName = document.createElement('h2');
  countryName.innerText = `Country Name : ${data[0].name.common.toUpperCase()}`;
  countryName.setAttribute('style', 'margin-bottom:15px;')
  console.log(typeof data[0].name.common);
  
  
  let countryImage = document.createElement('img');
  countryImage.alt = `${data[0].flags.alt}`;
  countryImage.src = `${data[0].flags.png}`;
  countryImage.setAttribute("style", "margin-bottom:15px;");
  
  let CountryCapital = document.createElement('p');
  CountryCapital.innerText = `Capital  : ${data[0].capital}`;

  let region = document.createElement("p");
  region.innerText = `Region  : ${data[0].region}`;

  let subRegion = document.createElement("p");
  subRegion.innerText = `Sub-Region  : ${data[0].subregion}`;

  let Population = document.createElement("p");
  Population.innerText = `Population  : ${data[0].population}`;


  details.append(countryName,countryImage,CountryCapital,region,subRegion,Population);
};

let fetchData = () => {
  details.innerHTML = '';
  let data = input.value;
  input.value = '';
  fetch(`https://restcountries.com/v3.1/name/${data}`)
    .then((response) => response.json())
    .then((data) => {
      
      countryDetail(data);
    })
    .catch((error) => {
      alert('the data entered in not a valid country name')
    });
}

button.addEventListener('click', fetchData);
