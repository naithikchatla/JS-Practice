const accountId = 12345
let accountEmail = "naithik@google.com"
var accountPassword = "78789"
accountCity = "Mumbai"
let accountState;

accountEmail = "naithik@google16.com"
accountPassword = "naithik"
accountCity = "HYD"
// accountId = 2 //not allowed to do

// console.log(accountId); // for to check one variable output

/*
prefer not to use var 1) because of issue in block scope and functional scope
2) also it itself add onto window object (because of it, it exposes the data)
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]) //for all output