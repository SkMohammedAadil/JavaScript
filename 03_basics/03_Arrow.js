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