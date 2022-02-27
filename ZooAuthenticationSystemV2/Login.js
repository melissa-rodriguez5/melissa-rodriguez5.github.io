//Import access to Session file to access data if login is successful
const Session = require('./Session');
//Imports CryptoJS library to access MD5 for hashing passwords
let MD5 = require("crypto-js/md5");

let username = "";
let password = "";
let hashPassword = "";
let userRole = "";
let loginSuccess = false;

//Credential data array
let credentials = [["user1", "7c6a180b36896a0a8c02787eeafb0e4c", "veterinarian"], ["user2", "6cb75f652a9b52798eb6cf2201057c73", "conservation zoologist"], ["user3", "819b0643d6b89dc9b579fdfc9094f28e", "director"]];

//Prompts user for username and password, then hashes password before beginning the validation process
module.exports = {
    inputLogin: function() {
        loginSuccess = false;
        const input = require("readline-sync");
            
        username = input.question("Enter username:\n");
        if (username == "q") {
            console.log("Exiting program. Goodbye.");
            process.exit(0);
        }
        
        password = input.question("Enter password:\n");
        if (password == "q") {
            console.log("Exiting program. Goodbye.");
            process.exit(0);
        }

        hashPassword = MD5(password).toString();
        compareCredentials();
    }
 }

//Checks user input with credentials array to see if there is a match
function compareCredentials() {
    for (let i = 0; i < credentials.length; i++) {
        if (credentials[i][0] == username && credentials[i][1] == hashPassword) {
            userRole = credentials[i][2];
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