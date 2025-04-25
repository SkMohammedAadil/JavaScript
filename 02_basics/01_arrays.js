// Array

const myArr = [0, 10, 20, 30, 40, 50]
const myHeros =["Hulk", "Ben10", "Thor", "Groot"]

const myArr2 = new Array(10, 20, 50, 85)
//console.log(myArr[2]);

// Array Methods

//myArr.push(28)  // Adds elements to the Arraylist
//myArr.push(34)
//console.log(myArr);

//myArr.pop()     // remove the last element from the list

//myArr.unshift(0)    // use to push element in the list
//console.log(myArr);

//myArr.shift()    // use to remove the push element from the list

// console.log(myArr.includes(10));    // use to check whether the element is present or not in the array list
// console.log(myArr.indexOf(6) );     // use to check the index position the present element if not prese

// const newArr = myArr.join()     //here aal the values in array are converted into string

// console.log(typeof newArr);

// console.log(myArr);    
// console.log(newArr);

//++++++++++ Slice, Splice +++++++++++

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      // it doesn't include the last index position of element

console.log("B ", myn1);

const myn2 = myArr.splice(3, 5)     // it include the last index position of element
console.log("C ", myArr);

