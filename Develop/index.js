// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const licences = ["MIT", "Apache 2.0", "BSD3", "None"];

// TODO: Create an array of questions for user input
//"project title", Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
/*
    {
        type: "input",
        message: "",
        name: ""
    },
*/
const questions = [

    {
        type: "input",
        message: "What is your Github Username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the Title of your Project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of your project:",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license are you using?",
        choices: licenses,
        default: licenses[1],
    },
    
    {
        type: "input",
        message: "What command do you need to run for dependencies if you have any?",
        name: "dependencies",
        
    },
    {
        type: "input",
        message: "What command do you use to run tests? (leave blank if none)",
        name: "test"
    },
    {
        type: "input",
        message: "what does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who Contributed to the project? (Leave blank if it was a solo project)",
        name: "contributors"
    },
    {
        type: "input",
        message: "What does the user need to know to contribute to this project?",
        name: "adding"
    },
    {
        type: "input",
        message: "What is your Email address?",
        name: "email"
    },
];

function licenseBadge (licenseChoices) {
    let badge = "";
    switch (licenseChoices) {
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "APACHE 2.0":
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]";
            break;
        case "BSD3":
            badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        default:
            badge = "";
    }
    return badge;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
