const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your project's title?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information for your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines for your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions for your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license does your project have?',
      choices: ['MIT', 'GPLv3', 'Apache', 'Unlicense', 'Other'],
    },
    {type: 'input',
     name: 'questions',
     message: 'What is your email address?'
    },
    {type: 'input',
     name: 'userName',
     message: 'What is your GitHub user name?'}
  ])
  .then((answers) => {
    const filename = 'README.md';

    const content = `

# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

${answers.questions}
[${answers.userName}](https://github.com/${answers.userName})

`;

    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`README.md successfully generated!`);
      }
    });
  });
