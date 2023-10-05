// Name
let fName = document.getElementById("FName");
let lName = document.getElementById("LName");

//Address
let address = document.getElementById("address");

//Address
let pincode = document.getElementById("pincode");

// Gender
let gender = document.getElementsByName("gender");

//  choice of food
let food = document.getElementsByName("food");

//State
let state = document.getElementById("state");

//Address
let country = document.getElementById("country");

//submit
let submit = document.getElementById("submit");

//table
let table = document.getElementById("tableBody");

let clr = document.getElementById("clrBtn");

function log() {
  let check = [];
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      check.push(food[i].value);
    }
  }
  if (check.length < 2) {
    alert("Please select atleast two foods....");
  } else {
    let gen = [];
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        gen.push(gender[i].value);
      }
    }

    let row = document.createElement("tr");
    row.innerHTML = `
                    <td>${fName.value}</td>
                    <td>${lName.value}</td>
                    <td>${address.value}</td>
                    <td>${pincode.value}</td>
                    <td>${gen.join(",")}</td>
                    <td>${check.join(",")}</td>
                    <td>${state.value}</td>
                    <td>${country.value}</td>
                                    `;

    table.appendChild(row);
    document.getElementById("form").reset();
  }
}

submit.addEventListener("click", log);

clr.addEventListener("click", () => {
  table.deleteRow(-1);
});
