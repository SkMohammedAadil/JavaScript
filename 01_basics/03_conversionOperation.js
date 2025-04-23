let score = "aadil"

console.log(typeof score);  // "33" is a string
console.log(typeof(score)); //"33" is a string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // "33" is a number
console.log(valueInNumber); // "33abc" is NaN datatype

console.log(typeof score);  // "null" is a Object
console.log(typeof score);  // undefined and for valueInNumber will be number

console.log(typeof score);  // for all it will be boolean but for valueInNumber is 1 and type is number

console.log(typeof score);  // for string it will be string


//----------Notes--------//
/*
    "33" => 33
    "33abc" => NaN
    true => 1, false => 0
    "" => false
    "abc" => true

*/
let isLoggedIn = 1
let isLoggedIn2 = ""
let isLoggedIn3 = "Aadil"

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

console.log(booleanIsLoggedIn);
console.log(booleanIsLoggedIn2);
console.log(booleanIsLoggedIn3);

let someNumber = 34

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

