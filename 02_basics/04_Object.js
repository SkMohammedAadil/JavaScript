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
//console.log(obj3);

//console.log(obj3==obj1==obj2==obj4);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

users[1].email
//console.log(gPayUser);

// console.log(Object.keys(gPayUser));
// console.log(Object.values(gPayUser));
// console.log(Object.entries(gPayUser));

// console.log(gPayUser.hasOwnProperty('isLoggedIn'));
// console.log(gPayUser.hasOwnProperty('id'));     // to check whether the property is present or not

//++++++++++++  De-Structuring  ++++++++++++++++++++

const youtube = {
    coursename: "javascript",
    price: "999",
    tutor: "Sam"
}

// youtube.tutor
const {tutor} = youtube

//console.log(tutor);

const {tutor: teacher} = youtube    // this process of changing the name of variable is called DESTRUCTING 
console.log(teacher);

// {
//     name: "aadil",
//     email: "xyz@gmail.com",
//     id: "234245"
// }

[
    {},
    {},
    {}
]