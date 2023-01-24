// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
    switch (license) {
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "APACHE 2.0":
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]";
            break;
        case "BSD3":
            badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        default:
            badge = "";
    }
    return badge;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.licenses);
  const badge = renderLicenseBadge(data.licenses);
  const Langbadge = `![LanguageCount](https://img.shields.io/github/languages/count/${data.username}/${data.reponame})
  (https://github.com/${data.username}/${data.reponame})`;
  
  var readMe = `
    
# ${data.title}
${badge}
${Langbadge}
    
## Description:
${data.description}

## Table of Contents
- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributions](#contributions)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install necessary dependancies, run the following command:

\`    
${data.dependencies}
\`    

## Usage

${data.usage}


## License

This project is licensed under the ${data.licenses} license.

## Contributions

${data.contributions}

### Special Thanks to the following contributors


${data.contributors}

## Tests

To run tests, follow the instructions below:

\`
${data.tests}
\`

## Questions

If there are any questions or open issues, contact [${data.username}](https://github.com/${data.username}) directly at ${data.email} 
    
    `;

    return readMe;
    
}

module.exports = {generateMarkdown};
