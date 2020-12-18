// Bringing in inquirer, generateMarkdown, and fs
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
    "What is the title of your application?",
    "What is the description of your application?",
    "What are the installation instructions for your application?",
    "What is the usage information for your application?",
    "What are the contribution guidelines for your application?",
    "What are the testing instructions for your application?",
    "What is you GitHub username?",
    "What is you email address?",
    "Please choose a license for your application:",
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'testing',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'email',
            },
            {
                type: 'list',
                message: questions[8],
                choices: ['MIT', 'Mozilla', 'Apache'],
                name: 'license',
            },
        ])
        .then((response) => 
            writeToFile("README.md", generateMarkdown(response))
        );
}

// function call to initialize program
init();