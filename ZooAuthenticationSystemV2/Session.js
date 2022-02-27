//Import access to AuthenticationSystem file to restart login attempt
const AuthenticationSystem = require('./AuthenticationSystem');
//Import access to CRUD file to call requested functionality
const CRUD = require('./CRUD');

let command = "";
let menuOption = "";
let roleArr = "";

//Give user menu options for how they want to interact with data, calls function of one of CRUD functionalities
module.exports = {
    initSession: function(userRole) {
        roleArr = userRole;
        const input = require("readline-sync");

        while(menuOption != 5) {
            menuOption = input.question("Type number for option:\n 1. Add new role duty\n 2. Display role duties\n 3. Change role duty\n 4. Delete role duty\n 5. Log out\n");

            if (menuOption == 1) {
                CRUD.create(roleArr);
            }
            else if (menuOption == 2)  {
                CRUD.read(roleArr);
            }
            else if (menuOption == 3) {
                CRUD.update(roleArr);
            }
            else if (menuOption == 4) {
                CRUD.deleteRole(roleArr);
            }
        }

        menuOption = "";
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