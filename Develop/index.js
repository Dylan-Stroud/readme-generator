//Included packages
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');


const licenses = ["MIT", "Apache 2.0", "BSD3", "None"];

//Array of questions 
const questions = [

    {
        type: "input",
        message: "What is your Github Username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the name of your repo?",
        name: "reponame"
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
        name: "licenses",
        choices: licenses,
        default: licenses[1]
    },
    
    {
        type: "input",
        message: "What command do you need to run for dependencies if you have any?",
        name: "dependencies",
        
    },
    {
        type: "input",
        message: "What command do you use to run tests? (leave blank if none)",
        name: "tests"
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
        name: "contributions"
    },
    {
        type: "input",
        message: "What is your Email address?",
        name: "email"
    },
];


//prompts the user  
function promptUser() {
    return inquirer.prompt(questions);
}


//function initializes application and catches errors
function init() {
    promptUser()
        .then((response) => {
            
           
            data = markdown.generateMarkdown(response);
            fs.writeFile('./Generated/README.md', data, (err) =>
                err ? console.error(err) : console.log('Success!')
            );


            
            
        }).then(() => {
            console.log("README generation was successful.");
            }).catch(error => console.log(error));
}

// Function call to initialize app
init();
