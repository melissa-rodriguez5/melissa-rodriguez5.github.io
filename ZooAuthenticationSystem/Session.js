//Import access to AuthenticationSystem file to restart login attempt
const AuthenticationSystem = require('./AuthenticationSystem');
let command = "";

//Prints out list of duties from a text file based on user's role
module.exports = {
    initSession: function(userRole) {
        const readline = require('readline-sync');
        let fs = require('fs');
        userRole = userRole.replace(/(\r)/gm, "");
        let lines = fs.readFileSync(userRole + '.txt');

        lines = lines.toString().split(/[\n]/);
        console.log(lines);

        logOut();
    }
}

//Initiates log out process so the user can log in as another or quit
function logOut() {
    const input = require("readline-sync");
            
    command = input.question("\nEnter 'n' for new user or 'q' to quit.\n");

    if(command == "n") {
        AuthenticationSystem.loginScreen();
    }
    else if(command == "q"){
        console.log("\nExiting program. Goodbye.");
    }
}