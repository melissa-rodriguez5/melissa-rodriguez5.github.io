//Import access to Session file to access data if login is successful
const Session = require('./Session');
//Imports CryptoJS library to access MD5 for hashing passwords
let MD5 = require("crypto-js/md5");
let username = "";
let password = "";
let hashPassword = "";
let userRole = "";
let loginSuccess = false;

//Prompts user for username and password, then hashes password before beginning the validation process
module.exports = {
    inputLogin: function() {
        loginSuccess = false;
        const input = require("readline-sync");
            
        username = input.question("\nEnter username:\n");
        if (username == "q") {
            console.log("\nExiting program. Goodbye.");
            process.exit(0);
        }
        
        password = input.question("Enter password:\n");
        if (password == "q") {
            console.log("\nExiting program. Goodbye.");
            process.exit(0);
        }

        hashPassword = MD5(password).toString();
        compareCredentials();
    }
 }

//Checks user input with credentials file to see if there is a match
function compareCredentials() {
    const readline = require('readline-sync');
    let fs = require('fs');
    let lines = fs.readFileSync('credentials.txt');
    let correctLine = "";

    lines = lines.toString().split(/[\n]/);

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith(username) && lines[i].includes(hashPassword)) {
            correctLine = lines[i];
            let index = correctLine.indexOf( ' ', correctLine.indexOf( ' ' ) + 1 );
            userRole = correctLine.substr( index + 1 );
            loginSuccess = true;
            success(loginSuccess);
        }
    }
}

//Returns successful login attempt to AuthenticationSystem
var success = function() {
    return loginSuccess;
}
module.exports.success = success;

//Calls function from Session to begin session after successful login
var startSession = function() {
    Session.initSession(userRole);
}
module.exports.startSession = startSession;