class uber {
  constructor(distance) {
    this.distance = distance;
  }
  displayInfo() {
    let fare = 0;
    if (this.distance <= 5) {
      fare = fare + 150;
    } else {
      fare = fare + 150 + (this.distance - 5) * 15;
    }
    return fare;
  }
}

let firstRide = new uber(6);

console.log(firstRide.displayInfo());
