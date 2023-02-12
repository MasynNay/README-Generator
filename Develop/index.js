// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Thank you for using my README generator. To give you the best README possible, please provide the following information: (Press "Enter" to continue)'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Please enter your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a short description for your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the installation instructions for your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter the usage information for your project.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter the contribution guidelines for your project.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter the test instructions for your project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license you would like to include in your project.',
    choices: ['None', 'Apache 2.0', 'GNU GPLv3', 'MIT'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log('Creating README.');
    writeToFile('README.md', generateMarkdown({...data}));
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
}

// Function call to initialize app
init();
