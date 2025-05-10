const user = {
    username: "Henry",
    price: 599,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);      //this will give the current value✅
        
    }                           // in Browser WINDOW is the Global Object

}
// user.welcomeMessage()
// user.username = "Peter"
// user.welcomeMessage()

// console.log(this);

// function mic() {
//    // console.log(this);      // THIS only works inside the OBJECT not function
// }

// mic()

// const mic = function() {
//     let username = "aadil"
//     //console.log(this.username);      //here this returns undefined because it is called within function
    
// }

const mic = () => {
    let username = "maxx"
    console.log(this);
    
}

//mic ()

// const addTwo = (num1, num2) => {                    //Explicit RETURN (when we use return)
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2          // implicit RETURN

//const addTwo = (num1, num2) => ( num1 + num2 )          //this technique is used in REACT

const addTwo = (num1, num2) => ({username: "Aadil "})         //to get the Object at return we have to use parenthesis{}
console.log((addTwo(10, 20)));


