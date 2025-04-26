/*
    there are two ways to declare an Object :
    1) const gPayUser = new Object()
    2) const gPayUser = {}
*/
//const gPayUser = new Object()     // SINGLETON Object
const gPayUser = {}                 // NON-SINGLETON Object

gPayUser.id = "123abc"
gPayUser.name = "Meho"
gPayUser.isLoggedzIn = false

//console.log(gPayUser);

const payPalUser = {
    email: "mike@gmail.com",
    fullName: {
        userfullname: {
            firstname: "mohammed",
            lastname: "aadil"
        }
    }
}

// console.log(payPalUser.fullName.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}        //SPREAD method
console.log(obj3);

//console.log(obj3==obj1==obj2==obj4);
