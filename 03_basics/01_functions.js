// console.log("A");
// console.log("A");
// console.log("D");
// console.log("I");
// console.log("L");


function myName () {
    console.log("A");
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("L");
}

// myName()
/*
    here only myName is referance of the function and
    to execute we use parenthesis i.e., myName() and

*/

// function addNumbers(num1, num2) {
//     console.log(num1 + num2);
    
// }

//addNumbers()        //output is NaN

function addNumbers(num1, num2) {
    let result = num1 + num2
    return result
// console.log("aadil");   // after return statement nothing will be executed by console
    
    return num1 + num2
}
const result = addNumbers(10, 20)
//console.log("the sum of two number is : ", result);

//+++++++++++++++ If - Else +++++++++++++++++++++++++

function loginMessage(username = "Sam"){
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in `
}

//console.log((loginMessage("Aadil")));     // if we leave the argument empty it will return (undefined)
console.log((loginMessage()));

