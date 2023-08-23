
let obj1 = { name: 'person 1', age: 6, dob:3111996 };
let obj2 = { dob:3111996 , age: 6, name: 'person 1'};

const obj1Keys = Object.entries(obj1).sort();
const obj2Keys = Object.entries(obj2).sort();

//console.log(typeof(JSON.stringify(obj1Keys)));
//console.log(typeof (JSON.stringify(obj2Keys)));

if (JSON.stringify(obj1Keys) === JSON.stringify(obj2Keys)) {
  console.log('true');
} else {
  console.log('false');
}
