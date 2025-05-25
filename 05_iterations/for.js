// FOR loop

for (let i = 0; i <= 10; i++) {
    const num = i;

    if (i % 2 == 0) {
       //console.log("it's even " + i);
        
    } else {
        //console.log("odd " + num);
        
    }
}
//console.log(num);

for (let i = 1; i <= 10; i++) {
    //console.log(`Table of: ${i} `);
    for (let j = 1; j <= 10; j++) {
       //console.log(`Inner loop value ${j} and outer loop value ${i}`);
       //console.log(i + "*" + j + "=" + i*j);
       
    }
    
}
 let myArray = ["ben", "kevin", "vilgagx", "paradox"]
 //console.log(myArray.length);
 
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
}

//  break and continue

for (let i = 1; i < 20; i++) {
    console.log(`value of i is ${i}`);
    if (i == 5) {
        console.log("you have reached the limit "+ i);
        //continue;
        break ;
    }
}

