const inquirer = require('inquirer');
const fs = require('fs');
const { getSvgShape } = require('./lib/getSvgShape');
const { CreateShape } = require('./lib/createShape');
const cssColors = require('./lib/color');


const questions = [
  {
    type: 'input',
    name: 'logoName',
    message: 'Please enter up to 3 letters for your logo text.',
  },
  {
    type: 'input',
    name: 'logoTextColor',
    message: `Please enter text color keyword or a hexadecimal number for the logo's text color.`,
    validateInput: (input) => {
      const colorName = cssColors.includes(input.toLowerCase());
      const HexRegExp = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
      const validHex = HexRegExp.test(input)
      return validHex || colorName;
    }

  },
  {
    type: 'input',
    name: 'logoColor',
    message: `Please enter a color keyword or a hexadecimal number for the logo's background color.`,
    validateInput: (input) => {
      const colorName = cssColors.includes(input.toLowerCase());
      const HexRegExp = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
      const validHex = HexRegExp.test(input)
      return validHex || colorName;
    }
  },
  {
    type: 'list',
    name: 'logoShape',
    message: `Please choose logo shape`,
    choices: ['triangle', 'circle', 'square'],
  },
]


inquirer
  .prompt(questions)
  .then((answers) => {
    const finalSvgPath = './example/square.svg';
    const finalLogo = CreateShape(answers);

    fs.writeFile(finalSvgPath, getSvgShape(finalLogo), (err)=> {err ? console.error(err) : console.log('Generated logo.svg')}
    )
  })
  .catch((err) => console.error(err));