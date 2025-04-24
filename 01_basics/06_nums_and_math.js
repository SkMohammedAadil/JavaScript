const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.87634

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ Maths +++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // abs only change negative value into positive value but vice-versa is not possible
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.7));    //choose top value
// console.log(Math.floor(4.7));   //choose lowest value
// console.log(Math.min(4, 5, 2, 9, 0));
// console.log(Math.max(9, 6, 7, 12, 4));

console.log(Math.random()); // it always choose values between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);  // we add 1 to get value above 1 and more 😊

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);
