const userEmail = []

if (userEmail) {
    console.log("Got your mail");
} else {
    console.log("don't have email");
}


/*
    falsy values :
    ------------
    false, 0, -0, BigInt, "", null, undefined, NaN

    truthy values :
    -------------
    "0", 'false', " ", [], {}, function(){}, 
*/ 


if (userEmail.length === 0 ) {
    console.log("array is empty");   
} else {
    console.log(userEmail.length);
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {       // process to check whether the object is empty or not
    console.log("Object is empty");
}

/**
 * 
    Nullish Coalescing Operator (??) :
    ---------------------------------
    based on "Null and Undefined "


 */

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//  Terniary Operator
//  -----------------

const toyPrice = 100
toyPrice <= 90 ? console.log("less the 90") : console.log("more then 90");


    