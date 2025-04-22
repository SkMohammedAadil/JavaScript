const accountId = 78692
let accountEmail ="abc@gmail.com"
var accountPassword = "1234"
accountCity = "Bhadrak"

let accountState;
// accountId = 2  // not ALLOWED

accountEmail ="xyz@gmail.com"

accountPassword = "8900"
accountCity = "jajpur"

console.log(accountId);

/*
Prefer not to use VAR
because of issue in Block scope and 
Functional scope
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])
