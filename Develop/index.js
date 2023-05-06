// TODO: Include packages needed for this application
import { default as inquirer } from "inquirer";
import { writeFile } from "fs";
import { generateMarkdown } from "../utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
// Create license options in an array and apply their value to dropdown selection
const options = [
  { name: "MIT", value: "mit" },
  { name: "GPLv2", value: "gplv2" },
  { name: "GPLv3", value: "gplv3" },
  { name: "Apache", value: "apache" },
  { name: "BSD 3-Clause", value: "BSD 3-Clause" },
];
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give me a short description of what it can do.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do I install it?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use it? Explain like I'm 5.",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are your guidelines for contributions?",
  },
  {
    type: "input",
    name: "test",
    message:
      "How can somebody test it? Make sure to include all commands and such that are required.",
  },
  {
    type: "list",
    name: "license",
    message: "Would you like to use a license?",
    choices: options,
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
writeFile("README.md", generateMarkdown, (err) => {
  err
    ? console.error(err)
    : console.log("Generated your new README! Good luck!");
});

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init();
