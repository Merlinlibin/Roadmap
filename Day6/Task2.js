
class circle {
  constructor(radius, color) {
    this._radius = radius || "2.0";
    this.color = color || "red";
  }
  circleParameter() {
    console.log(this.radius, this.color);
  }
  set radius(r) {
    this._radius = r;
  }
  set color(c) {
    this._color = c;
  }
  get radius() {
    return this._radius;
  }
  get color() {
    return this._color;
  }
  toString() {
    console.log(`Radius : ${this.radius} & color  : ${this.color}`);
  }
  getArea() {
    console.log("Area : ", (2 * Math.PI * this.radius).toFixed(2));
  }
  getCircum() {
    console.log("Circumference : ", (2 * this.radius).toFixed(2));
  }
}

let circle1 = new circle();
circle1.circleParameter();

let circle2 = new circle(4.0);
circle2.circleParameter();

let circle3 = new circle(4.0, "white");
circle3.circleParameter();

console.log("Radius : " + circle3.radius);

console.log("Color : " + circle3.color);

circle3.toString();

circle3.getArea();

circle3.getCircum();
