class person {
  constructor(...arg) {
    this.name = arg[0];
    this.email = arg[1];
    this.phone = arg[2];
    this.aadhar = arg[3];
    this.address = arg[4];
  }
  displayInfo() {
    let info = `
        Person Information:
        Name   : ${this.name}
        email  : ${this.email}
        Phone No : ${this.phone}
        Aadhar No : ${this.aadhar}
        Address No : ${this.address}
        `;
    return info;
  }
}

let person1 = new person(
  "Merlin",
  "merlin2@gmail.com",
  "986754312",
  "984532157542",
  "Chadayankal, Kuzhicode"
);

console.log(person1.displayInfo());
