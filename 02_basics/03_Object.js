/*   There are two ways to declare OBJECT :--
        1. by using literals
        2. by using constructor [ Object.create (Object literals) ]

    =========SINGLETON============
        here single object is created while using constructor but 
        by using literal singleton object can't created. it is only
        possible by using constructor.

*/

//=========== Object Literals ==============

const mySym = Symbol("key1")
const jsUser = {
    name: "Aadil",
    "fullName" : "Sk_Mohammed_Aadil",
    [mySym] : "myKey1",     // here [] used to refer symbol else it will be treated as key
    
    mySym2 : "myKey2",      // here mySym2 is used to refer key
    age: 23, 
    location: "Bhadrak",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["fullName"]);    

// console.log(jsUser.mySym);
// console.log(jsUser.mySym2);

// console.log(typeof jsUser);
 //console.log(jsUser[mySym]);     


jsUser.email = "xyz@yt.com"
//Object.freeze(jsUser)       // used to lock the value so that no one can change the value
jsUser.email = "weq@edi.com"
//console.log(jsUser);

// =========== Function ==============

jsUser.greeting = function(){
    console.log("hello JS User");
    
}

//console.log(jsUser.greeting);   //here we get the reference of the function

jsUser.greeting2 = function(){
    console.log(`hello JS User, ${this.name}`); // here (` `)called as STRING INTERPOLATION and used to rference the name inside the object (jsUser)
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

// Final NOte :
/*
    while accessing the values use dot(.) in most of the cases
*/ 