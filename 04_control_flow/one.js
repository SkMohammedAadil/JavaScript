//  If statement

const isUserloggedIn = true
const tempreature = 32
if (tempreature > 34) {
    //console.log("It's Summer");      
}
else
{
   // console.log("Winter is comming!!");
}

const hp = 99
if (hp > 100) {
    const power = "fly"
    //console.log(`User power: ${power}`);
} else {
    const power = "Low hp"                      //always use const or let inside if and don't use var 
    //console.log(`User power: ${power}`);
}

const balance = 1000
//if (balance > 500) console.log("test");     //Implicit IF

if (balance < 200) {
    //console.log("less then 200");
} else if (balance <= 1000) {
   // console.log("less then 1000");   
} else if (balance > 500) {
    //console.log("greater then 500");
} else {
    //console.log("out of money");
}

const userLoggedIn = true
const debitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In sucessfully")
} else {
    console.log("incorrect credentials");
    
}