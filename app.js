// variable declaration
const fs = require("fs");
const inquirer = require("inquirer");

// obtain user input to create README
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process (if any)?",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the usage for the project: ",
        },
        {
            type: "list",
            name: "license",
            message: "What is the licensing for the project?",
            choices: [
                "Apache",
                "BSD",
                "CDLC",
                "Eclipse",
                "GNU",
                "MIT",
                "Mozilla",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors?",
        },
        {
            type: "input",
            name: "tests",
            message: "What test is included with project?",
        },
        {
            type: "input",
            name: "questions",
            message: "How does the project handle inquiries?",
        },
        {
            type: "input",
            name: "githubname",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
    ]);
}