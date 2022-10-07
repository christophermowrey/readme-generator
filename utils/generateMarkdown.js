// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicense = ''
  if(licenseType === "MIT") {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === "GPLv3") {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === "GPL") {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    yourLicense = ""
  }
  console.log(license.license);
  return yourLicense;
}
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}\n\n
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)
  5. [Test Instructions](#testInstructions)
  6. [License](#license)
  7. [Questions](#questions)
  ## Description \n
  ${data.description}\n\n
  ## Installation \n
  ${data.installation}\n\n
  ## Usage \n
  ${data.usageInformation} \n\n
  ## Contribution Guidelines \n
  ${data.contributionGuidelines}\n\n
  ## Test Instructions \n
  ${data.testInstructions}\n\n
  ## license \n
  ${data.license}\n\n
  ## Questions \n
  If you have any questions or want to get in touch you can contact me through email\n
  E-mail: ${data.email}\n
  Github: https://www.github.com/${data.githubUserName}\n\n
`;
};

module.exports = generateMarkdown, renderLicenseBadge;
