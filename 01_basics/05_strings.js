const name = "aadil"
const repoCount = 1

// console.log(name +  repoCount + " Value");  DONT USE THIS TYPE OF CONCATINATION NOWDAYZ

console.log(`Hello my name is ${name.toUpperCase(name)} and my repoCount is ${repoCount}`);

const gameName = new String("aadil-xx-kk")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 5)
console.log(anotherString);

const newStringOne = "    aadil   "
console.log(newStringOne.trim());
console.log(newStringOne);

const url = "https://aadil.com/aadil647%20mohammed"

console.log(url.replace('%20', '-'));

console.log(url.includes("sk"));

console.log(gameName.split('-'));
