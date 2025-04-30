//var c = 300

let a = 300     // GLOBAL scope
if (true) {
    let a = 10
    const b =20
    //console.log("INNER: ",a);       //BLOCK scope
}
 //console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "aadil"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);

    two()
    
}
//one()

if (true) {
    const username = "aadil"
    if (username === "aadil") {
        const website = "instagram"
        //console.log(username + website);
        
    }
   // console.log(website);     ERROR 1
    
}
//console.log(username);        ERROR 2


// +++++++++++++++++++ intresting +++++++++++++++++++++++++

console.log(addone(5));
function addone(value) {
    return value + 1
}

const addTwo = function(value){     // the process of holding constant through variable is known as "HOISTING"
    return value + 2                //hoisting occurs when we declare function before initialization.
}

console.log(addTwo(5));