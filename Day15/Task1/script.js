let div = document.createElement("div");
div.setAttribute(
  "class",
  "container d-flex justify-content-center align-items-center"
);

let div_cal = document.createElement("div");
div_cal.setAttribute("class", "calculator p-2 rounded");

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "output");
input.setAttribute("placeholder", "0");
input.setAttribute("onkeyup", "KeyRelease()");

let clr = document.createElement("button");
clr.setAttribute("onClick", "Clear()");
clr.setAttribute("style", "color:red");
clr.innerText = "C";

let dele = document.createElement("button");
let icon = document.createElement("i");
icon.setAttribute("style", "font-size: 13px;");
icon.setAttribute("class", "fa-solid fa-arrow-left");
dele.setAttribute("onClick", "del()");
dele.appendChild(icon);

let dot = document.createElement("button");
dot.setAttribute("onClick", "display('.')");
dot.innerText = ".";

let star = document.createElement("button");
star.setAttribute("onClick", "display('*')");
star.setAttribute("style", "color:blue");
star.innerText = "x";

let seven = document.createElement("button");
seven.setAttribute("onClick", "display('7')");
seven.innerText = "7";

let eight = document.createElement("button");
eight.setAttribute("onClick", "display('8')");
eight.innerText = "8";

let nine = document.createElement("button");
nine.setAttribute("onClick", "display('9')");
nine.innerText = "9";

let slash = document.createElement("button");
slash.setAttribute("onClick", "display('/')");
slash.setAttribute("style", "color:blue");
slash.innerText = "/";

let four = document.createElement("button");
four.setAttribute("onClick", "display('4')");
four.innerText = "4";

let five = document.createElement("button");
five.setAttribute("onClick", "display('5')");
five.innerText = "5";

let six = document.createElement("button");
six.setAttribute("onClick", "display('6')");
six.innerText = "6";

let dash = document.createElement("button");
dash.setAttribute("onClick", "display('-')");
dash.setAttribute("style", "color:blue");
dash.innerText = "-";

let one = document.createElement("button");
one.setAttribute("onClick", "display('1')");
one.innerText = "1";

let two = document.createElement("button");
two.setAttribute("onClick", "display('2')");
two.innerText = "2";

let three = document.createElement("button");
three.setAttribute("onClick", "display('3')");
three.innerText = "3";

let plus = document.createElement("button");
plus.setAttribute("onClick", "display('+')");
plus.setAttribute("style", "color:blue");
plus.innerText = "+";

let zero = document.createElement("button");
zero.setAttribute("onClick", "display('0')");
zero.innerText = "0";

let dZero = document.createElement("button");
dZero.setAttribute("onClick", "display('00')");
dZero.innerText = "00";

let equal2 = document.createElement("button");
equal2.setAttribute("onClick", "equal()");
equal2.innerText = "=";
equal2.setAttribute(
  "style",
  "width: 115px;color:white;background-color: rgb(22, 160, 245);"
);

div_cal.append(input, clr, dele, dot, star, seven, eight, nine,slash,four,five,six,dash,one,two,three,plus,zero,dZero,equal2);
div.appendChild(div_cal);
document.body.appendChild(div);

//=====================================================

let outputScreen = document.getElementById("output");

function display(number) {
  outputScreen.value = outputScreen.value + number;
}
function equal() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid key");
    outputScreen.value = outputScreen.value.slice(0, -1);
  }
}
function Clear() {
  outputScreen.value = "";
}
function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
function KeyRelease() {
  if (event.key >= 0 && event.key <= 9) {
    outputScreen.value = outputScreen.value;
  } else {
    alert("Only numbers are allowed");
    outputScreen.value = outputScreen.value.slice(0, -1);
  }
}
