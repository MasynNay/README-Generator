// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ``;
  switch (license) {
    case 'Apache 2.0':
      badge = `![License](https://img.shields.io/badge/License-Apache%202.0-brightgreen)`;
      break;
    case 'GNU GPLv3':
      badge = `![License: GPL v3](https://img.shields.io/badge/License-GNU%20GPLv3-brightgreen)`;
      break;
    case 'MIT':
      badge = `![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)`;
      break;
    case 'None':
      badge = ''
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ``;
  switch (license) {
    case 'Apache 2.0':
      link = `http://www.apache.org/licenses/LICENSE-2.0`;
      break;
    case 'GNU GPLv3':
      link = `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    case 'MIT':
      link = `https://opensource.org/licenses/MIT`;
      break;
    case 'None':
      link = ''
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = ``;
  if(license === 'None') {
    section = ''
  } else {
    section =
    `License: ${license} `
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

  # License Link:
  ### ${renderLicenseLink(data.license)}


  # Table of Contents:

  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)


  # Installation:
  ### To install this application, you must do the following:
  ### ${data.installation}


  # Usage:
  ### ${data.usage}


  # Contributors:
  ### ${data.contribution}


  # Tests:
  ### If you would like to test this application, please run the commands in the terminal:
  ### ${data.test}


  # Questions:
  ### If you have any further questions, you can reach me by my github or email:


  # Github: https://github.com/${data.github}
  # Email: ${data.email}
`;
}

module.exports = generateMarkdown;
