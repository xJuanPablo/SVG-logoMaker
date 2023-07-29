const isValidCssColor = require('is-valid-css-color');

class Shapes{
constructor({logoShape, logoName, logoTextColor, logoColor}){
  this.logoShape = logoShape;

  this.validTextInput(logoName)
  this.logoName = logoName;

  this.validColor(logoTextColor)
  this.logoTextColor = logoTextColor;

  this.validColor(logoColor)
  this.logoColor = logoColor;
}
NoInput(input){
  if(!input){
    throw new Error('Input can not be empty. Please insert a valid input')
  }
}

validTextInput(input){
  this.NoInput(input);

  if(input.length === 0 && input.length > 3){
throw new Error('Logo text has to be between 1 to 3 characters. Please try again.')
  }
}
validColor(input){
  this.NoInput(input);

  input = input.toLowerCase()

if(input !== isValidCssColor){
  throw new Error('Please enter a valid color name, RGB, or HSL')
}
}
}

module.exports = Shapes;
