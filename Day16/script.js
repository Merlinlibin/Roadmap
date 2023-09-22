
// creating the paragraph element
let p_tag = document.createElement("p");
p_tag.setAttribute("style",
  "font-size: 150px;display: flex;align-items: center;justify-content: center;color: gold;text-shadow: 0px 0px 20px #000000 ,10px 10px 20px #3c14ec,10px 10px 20px #e70b0b ;text-align: center;margin-top: 200px;font-weight:700")

// creating the  Callback hell function
let ten_nine = function (callback) {
  p_tag.textContent="10";
  setTimeout(() => {
    p_tag.textContent="9";
   callback()
  }, 1000);
}

let eight = function (callback) {
  setTimeout(() => {
    p_tag.textContent="8";
    callback();
  }, 1000);
};

let seven = function (callback) {
  setTimeout(() => {
    p_tag.textContent="7";
    callback();
  }, 1000);
};

let six = function (callback) {
  setTimeout(() => {
    p_tag.textContent="6";
    callback();
  }, 1000);
};

let five = function (callback) {
  setTimeout(() => {
    p_tag.textContent="5";
   callback()
  }, 1000);
}

let four = function (callback) {
  setTimeout(() => {
    p_tag.textContent="4";
   callback()
  }, 1000);
}

let three = function (callback) {
  setTimeout(() => {
    p_tag.textContent="3";
   callback()
  }, 1000);
}

let two = function (callback) {
  setTimeout(() => {
    p_tag.textContent="2";
   callback()
  }, 1000);
}

let one = function (callback) {
  setTimeout(() => {
    p_tag.textContent="1";
   callback()
  }, 1000);
}



// callback hell or pain of callback
ten_nine(function () {
  eight(function () {
    seven(function () {
      six(function () {
        five(function () {
          four(function () {
            three(function () {
              two(function () {
                  one(function () {
                    setTimeout(() => {
                      p_tag.textContent="Happy New Year";
                    }, 1000);
                });
              });
            });
          });
        });
      });
    });
  });
});


document.body.appendChild(p_tag);

