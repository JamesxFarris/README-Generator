// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // IF there is no license, return ""
  if (!license) {
    return "";
  }
  // Use a switch case here for license badge
  // switch (license.toLowerCase()) {
  //   case "mit":
  //     return "https://opensource.org/licenses/MIT";
  //   case "gplv2":
  //     return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  //   case "gplv3":
  //     return "https://www.gnu.org/licenses/gpl-3.0";
  //   case "apache":
  //     return "https://opensource.org/licenses/Apache-2.0";
  //   case "bsd 3-clause":
  //     return "https://opensource.org/licenses/BSD-3-Clause";
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // IF there is none, return ""
  if (!license) {
    return "";
  }
  // Use a switch case here for license link
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
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // If there isnt one, return ""
  if (!license) {
    return "";
  }

  return "## License";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (!license) {
    return "";
  }
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
