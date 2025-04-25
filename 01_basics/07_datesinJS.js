// Dates

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof  myDate);

let myCreateDate = new Date(2025, 4,25);
//console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date("2025-01-24");
//console.log(myCreateDate2.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate2.getTime());   //provides time with milli swcond
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());      //provide sequence number of days
console.log(newDate.getTime());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",

})

