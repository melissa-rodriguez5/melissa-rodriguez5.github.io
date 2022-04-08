/*
* Author: Melissa Rodriguez
* Creation Date: January 24, 2022
* Revision: #6
* Purpose of code: To authenticate a zoo employee's login credentials and authorize
* them to view data that pertains to their role
*/

//Imports access to Login file to check if credentials are valid
const Login = require('./Login');

//Checks if user is able to successfully login within 3 tries, ends program if the third try is unsuccessful
var loginScreen = function() {
    let failedAttempts = 0;

    while (failedAttempts < 3) {
        Login.inputLogin();

        if (Login.success()) {
            break;
        }

        console.log("Incorrect username or password.");
        ++failedAttempts;
    }

    if (failedAttempts == 3) {
        console.log("Too many failed attempts. Exiting program.");
    }
    else {
        Login.startSession();
    }
}
module.exports.loginScreen = loginScreen;

//Main section, starts program
console.log("Enter 'q' at any time to quit program.");
loginScreen();