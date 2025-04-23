// Primitive ---------------------

// 7 types : String, Number, Boolean, null, undefined, Symbol(to make values UNIQUE), BigInt

const score  = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 3456356890787878n


// Reference type (Non primitive)-------------------

// Arrays, Objects, Functions


const heros = ["shaktiman", "Ben10", "Batman", "Hulk", "Thor"]
let myObj = {
    name: "Aadil",
    age: 22,
}

const myFunction = function(){
   console.log("Hello world");
}

console.log(typeof bigNumber);      //undefined
console.log(typeof outsideTemp);    // Object
console.log(typeof scoreValue);     //number
console.log(typeof myFunction);     //function
console.log(typeof heros);      //Object
console.log(typeof anotherId);      //Symbol


// useful links
// https://262.ecma-international.org/5.1/#sec-11.4.3

