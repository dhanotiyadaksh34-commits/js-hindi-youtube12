const accountId = 144553
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2//not allowed as the accountId is constant


accountEmail="abs@gmail.com"
accountPassword = "2121213"
accountCity = "Bengluru"

/*
 never ever use the var as the problem of block scope \
 arises due to the usage of the var
*/

console.table([accountEmail , accountId , accountPassword , accountCity , accountState])