// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // IF there is no license, return ""
  if (!license) {
    return "";
  }
  // Use a switch case here for license badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // IF there is none, return ""
  if (!license) {
    return "";
  }
  // Use a switch case here for license link
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
