const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const renderLicenseBadge = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of project",
  },
  {
    type: "input",
    name: "description",
    message: "Short description",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation (clone github, run npm i, delete System32, etc)",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Usage and License: Open Licence, MIT, etc",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "How can I contribute?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "How can I test?",
  },
  {
    type: "input",
    name: "email",
    message: "If you have any questions, please email:"
  }
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    renderLicenseBadge(response);
    const readmePageContent = generateMarkdown(response);

    fs.writeFile("./generated-readmes/README.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("sucessfuly created readme!")
    );
  });
}

// Function call to initialize app
init();
