//User roles arrays
let veterinarian = ["1. Evaluate the health and welfare of animals.",
    "2. Communicate with zookeepers, including those who specialize in particular species.",
    "3. Conduct routine medical checkups on all animals.",
    "4. Provide medical care such as setting bones, dressing wounds and performing surgery."];
let conservationZoologist = ["1. Provide scientific and technical assistance in the management of the animal collection.",
    "2. Assist in conducting various research or field conservation projects.",
    "3. Help develop educational materials for zoo staff and visitors.",
    "4. Participate in the direct care of animals."];
let director = ["1. Manage park operations, create budgets, implement policies, hire management staff, and source additional funding.",
    "2. Act as the chief spokesperson for the zoo in media relations.",
    "3. Collaborate with departmental directors and curators.",
    "4. Oversee the development of the facility."];

let option = "";
let dutyChange = "";

//User adds new role duty to the end of the list
var create = function(roleArr) {
    const input = require("readline-sync");
            
    if(roleArr == "veterinarian") {
        option = input.question("Type in new role duty: ");
        veterinarian.push(option);
        console.log("Duty added successfully\n");
    }
    else if(roleArr == "conservation zoologist") {
        option = input.question("Type in new role duty: ");
        conservationZoologist.push(option);
        console.log("Duty added successfully\n");
    }
    else if(roleArr == "director") {
        option = input.question("Type in new role duty: ");
        director.push(option);
        console.log("Duty added successfully\n");
    }
}
module.exports.create = create;

//Prints list of role duties
var read = function(roleArr) {
    if(roleArr == "veterinarian") {
        console.log(veterinarian);
    }
    else if(roleArr == "conservation zoologist") {
        console.log(conservationZoologist);
    }
    else if(roleArr == "director") {
        console.log(director);
    }
}
module.exports.read = read;

//Allows user to select an existing role duty and edit it
var update = function(roleArr) {
    const input = require("readline-sync");
            
    if(roleArr == "veterinarian") {
        console.log(veterinarian);
        option = input.question("Choose duty to change by number: ");

        if(veterinarian[option-1] !== undefined) {
            dutyChange = input.question("Type in role duty change: ");
            veterinarian[option-1] = dutyChange;
            console.log("Duty changed successfully\n");
        }
        else {
            console.log("Not a valid option.\n");
        }
    }
    else if(roleArr == "conservation zoologist") {
        console.log(conservationZoologist);
        option = input.question("Choose duty to change by number: ");
        
        if(conservationZoologist[option-1] !== undefined) {
            dutyChange = input.question("Type in role duty change: ");
            conservationZoologist[option-1] = dutyChange;
            console.log("Duty changed successfully\n");
        }
        else {
            console.log("Not a valid option.\n");
        }
    }
    else if(roleArr == "director") {
        console.log(director);
        option = input.question("Choose duty to change by number: ");
        
        if(director[option-1] !== undefined) {
            dutyChange = input.question("Type in role duty change: ");
            director[option-1] = dutyChange;
            console.log("Duty changed successfully\n");
        }
        else {
            console.log("Not a valid option.\n");
        }
    }
}
module.exports.update = update;

//Deletes existing role duty from list based on user selection
var deleteRole = function(roleArr) {
    const input = require("readline-sync");
            
    if(roleArr == "veterinarian") {
        console.log(veterinarian);
        option = input.question("Choose duty to delete by number: ");

        if(veterinarian[option-1] !== undefined) {
            veterinarian.splice(option-1, 1);
            console.log("Duty deleted successfully\n");
        }
        else {
            console.log("Not a valid option.\n");
        }
    }
    else if(roleArr == "conservation zoologist") {
        console.log(conservationZoologist);
        option = input.question("Choose duty to delete by number: ");

        if(conservationZoologist[option-1] !== undefined) {
            conservationZoologist.splice(option-1, 1);
            console.log("Duty deleted successfully\n");
        }
        else {
            console.log("Not a valid option.\n");
        }
    }
    else if(roleArr == "director") {
        console.log(director);
        option = input.question("Choose duty to delete by number: ");

        if(director[option-1] !== undefined) {
            director.splice(option-1, 1);
            console.log("Duty deleted successfully\n");
        }
        else {
            console.log("Not a valid option.\n");
        }
    }
}
module.exports.deleteRole = deleteRole;