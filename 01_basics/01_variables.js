const accountId = 1253  // Here Why we are taking const bcoz accountId should not be changed
let accountEmail = "microsoft@google.com"
var accountCity = "Mumbai"
// accountState;   // ReferenceError: accountState is not defined


//accountId = 2 // Not Allowed // Gives TypeError : Assignment to constant variable

accountEmail = "google@microsoft.com"
let accountPassword = "Pass@123"
accountCity = "Banglore"

// console.log(accountId); // 1253

/* Prefer not to use var
because of issue  in block 
scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])