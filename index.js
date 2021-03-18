// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'story',
    },
    {
      type: 'input',
      message: 'What type of usage license are you using?',
      name: 'communication',
    },
    {
      type: 'input',
      message: 'What are your table of contents?',
      name: 'table of contents',
    },
    {
      type: 'input',
      message: 'What is the installation process?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the test instrucions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
    },

 
  ])
  .then((burrito) =>{
     const readMe = `${burrito.name}.json`
     fs.writeFile(readMe, JSON.stringify(burrito), (err)=> err ? console.log(err) : console.log("wooho"))

  });



// Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
