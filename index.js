// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the description of your project?",
      name: "story",
    },
    {
      type: "input",
      message: "What languages did you build with?",
      name: "languages",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "What is the installation process?",
      name: "installation",
    },
    {
      type: "input",
      message: "What are the testing instructions?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is live URL?",
      name: "link",
    },
    {
      type: "input",
      message: "How is this applicable?",
      name: "usage",
    },
  ])
  .then((data) => {
    console.log(typeof data);
    const readMe = "template.md";
    fs.writeFileSync(readMe, generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("sucess")
    );
  });

// Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
