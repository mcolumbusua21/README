// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "APACHE 2.0") 
return`<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></img>`
  if(license == "MIT") 
return`<img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>`
  if(license == "GPL 3.0") 
return`<img src="https://img.shields.io/badge/License-GLPv3-blue.svg"></img>`
  if(license == "BSD 3") 
return`<img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"></img>`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none")
  return `*[License](#License)`
  else{
    return;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  

  return `
# ${data.name}
${renderLicenseBadge(data.license)}

## Description 
${data.story}

## Table of Contents
* [Installation](#installation)
​
* [Usage](#usage)

* [Languages](#languages)
​
* [License](#license)

* [Installation](#installation)

* [Tests](#testing)

* [Contact](#contact)

* [GitHub](#GitHub)

* [Link](#link)
​
* [Questions](#questions)

## Languages
${data.languages.join(", ")}

## License


\`\`\`
${data.license}
\`\`\`

## Installation
​
To install necessary dependencies, run the following command:
​


\`\`\`
npm i
\`\`\`


## Testing 
To run tests, run the following command:
​
\`\`\`
npm test
\`\`\`


## Contact 
${data.email}

## GitHub
${data.GitHub}

## Link 
${data.link}

## Usage 
${data.usage}

## Questions
​
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.GitHub}.


`;
}

module.exports = generateMarkdown;
