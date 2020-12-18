// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

 ## Installation

${data.installation}

## Usage

${data.usage}

## License

This application used the ${data.license} license.

## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions

My GitHub username is: ${data.github}

Link: https://github.com/${data.github}

If you have additional questions, feel free to reach me at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;