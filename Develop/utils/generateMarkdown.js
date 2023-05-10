// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "gplv2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "gplv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "bsd 3-clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "gplv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "gplv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "bsd 3-clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there isnt one, return ""
  if (!license) {
    return "";
  }

  return `## License: Distributed under the ${license} license ${renderLicenseBadge(
    license
  )}
  
  If you are interested in learning more about the license check ${renderLicenseLink(
    license
  )}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (!license) {
    return "";
  }
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ## Questions
  For questions or support, please contact me at ${data.email}.
  
  You can check out the project at (https://github.com/${data.username}.
`;
}

export { generateMarkdown };
