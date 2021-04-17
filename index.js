// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown")



// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
  message: 'What is your Project name?',
  name: 'projName',
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email',
  default: 'alexoneill561@gmail.com'
},
{
  type: 'input',
  message: 'What is your GitHub username?',
  name: 'userName',
  default: 'alexoneill561',
},
{
  type: 'input',
  message: 'How would you describe your project in a few words:',
  name: 'description',
},
{
  type: 'input',
  message: 'Enter link to project so it can be viewed:',
  name: 'link',
},
{
  type: 'list',
  message: 'What license would you like to use on your project',
  choices: ['MIT', 'APACHE 2.0', 'GPL 2.0', 'GPL 3.0', 'BSD 3-clause', 'None'],
  name: 'license',
},
{
  type: 'input',
  message: 'What is the command to run install dependencies?',
  default: 'npm i',
  name: 'install',
},
{
  type: 'input',
  message: 'What command is used to run a test?',
  default: 'npm test',
  name: 'tests',
},

{
  type: 'input',
  message: 'What does the user need to know about using your repository?',
  name: 'usage',
},

{
  type: 'input',
  message: 'What does a user need to contribute to repo?',
  name: 'contribute',
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success")); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        let answers = markdown(data);
        writeToFile("README.md", answers);
         })
}

// Function call to initialize app
init();
